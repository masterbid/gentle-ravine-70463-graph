require("dotenv").config()
const mongoose = require('mongoose')

const vendorsSchema = mongoose.Schema({
    itemId : {
        type:String
    },
    vendor : {
        vendorName: {
            type:String,
            default: ""
        },
        vendorAccountName: {
            type:String,
            default: ""
        },
        vendorAccountNumber: {
            type: Number,
            minlength: 10,
            maxlength: 10,
            default: 0000000000
        },
        vendorBankName: {
            type:String,
            default: ""
        }
    }
})

const Vendor = mongoose.model("vendor", vendorsSchema)
module.exports = Vendor