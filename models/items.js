require("dotenv").config()
const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema({
    
    userId : {
        type:String
    },
    requestId : {
        type:String
    },
    productName : {
        type:String
    },
    quantity : {
        type:Number
    },
    measurement : {
        type:String
    }, 
    
    price : {
        type: Number,
        default: 0
    },
    subtotal : {
        type: Number,
        default: 0
    }
})

 
module.exports.Items = mongoose.model("Items", itemsSchema)