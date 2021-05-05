require("dotenv").config()
const mongoose = require('mongoose')

const RequestSchema = mongoose.Schema({
    date: {
        type:Date,
        default: Date.now
    },
    purpose: {
        type:String
    },
    description: { 
        type:String
    },
    department: { 
        type:String
    },
    userId: mongoose.Types.ObjectId,
    total: {
        type: Number,
        default: 0
    }
})


const Request = mongoose.model("request", RequestSchema)
module.exports = Request