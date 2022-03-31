const mongoose = require('mongoose');

const currencyRate = mongoose.Schema({
    combined_name:String,
    at:String,
    base_unit:String,
    buy:String,
    high:String,
    last:String,
    low:String,
    name:String,
    open:String,
    quote_unit:String,
    sell:String,
    type:String,
    volume:String
    
})

const Rates = new mongoose.model('quadbteches',currencyRate)

module.exports = Rates