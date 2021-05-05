require("dotenv").config()
const mongoose = require('mongoose')

const PolicySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "The policy title must not be empty"]
    },
    body: {
        type: String,
        required: [true, "The body/content of policy must not be empty"]
    },
    updatedAt: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date().toString()
    }
})

module.exports.Policy = mongoose.model("Policy", PolicySchema)
