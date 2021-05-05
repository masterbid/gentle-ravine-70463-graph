
const mongoose = require('mongoose')

const HelpSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title must not be empty"]
    },
    body: {
        type: String,
        required: [true, "The body/content of help must not be empty"]
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

module.exports.Help = mongoose.model("Help", HelpSchema)