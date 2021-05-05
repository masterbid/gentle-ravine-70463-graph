require("dotenv").config()
const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    userId : {
        type:String
    },
    pending: {
        type: Boolean,
        default: true
    },
    priceUpdate: {
        type: Boolean,
        default: false
    },
    priceUpdated: {
        type: Boolean,
        default: false
    },
    approved:{
        type: Boolean,
        default: false
    },
    approveByCOO: {
        type: Boolean,
        default: false
    },
    approveByCFO: {
        type: Boolean,
        default: false
    },
    approveByCEO: {
        type: Boolean,
        default: false
    },
    approvedByCOO: {
        type: Boolean,
        default: false
    },
    approvedByCFO: {
        type: Boolean,
        default: false
    },
    approvedByCEO: {
        type: Boolean,
        default: false
    },
    rejected: {
        type: Boolean,
        default: false
    },
    rejectedByCOO: {
        type: Boolean,
        default: false
    },
    rejectedByCFO: {
        type: Boolean,
        default: false
    },
    rejectedByCEO: {
        type: Boolean,
        default: false
    },
    treat: {
        type: Boolean,
        default: false
    },
    treated: {
        type: Boolean,
        default: false
    },
    retire: {
        type: Boolean,
        default: false
    },
    retired: {
        type: Boolean,
        default: false
    },
    funded: {
        type: Boolean,
        default: false
    }
    
})
const Status = mongoose.model("status", statusSchema)
module.exports = Status