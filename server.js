const express= require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const Rates = require('./model/model');
const dotenv = require('dotenv')

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({ 
    origin:'*'
}))

app.set("view engine","ejs")




const mongoURI = 'mongodb+srv://anuj:<password>@cluster0.6xcfe.mongodb.net/FORJOBS?retryWrites=true&w=majority'

    mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
    })

    async function uploadData(combinedName,ele){
        
        let Rate = new Rates({
            combined_name:combinedName,
            at:ele.at,
            baseUnit:ele.base_unit,
            buy:ele.buy,
            high:ele.high,
            last:ele.last,
            low:ele.low,
            name:ele.name,
            open:ele.open,
            quoteUnit:ele.quote_unit,
            sell:ele.sell,
            type:ele.type,
            volume:ele.volume
        })
        await Rate.save().then(()=>console.log('success')).catch((err)=>console.log(err))
                 
    }


app.get('/data',async (req,res)=>{
    let temp = await Rates.find().limit(10)

    res.json(temp)
    
    
})

app.listen(process.env.PORT || 5000,()=>console.log(`server started at port ${process.env.PORT || 5000}`))


