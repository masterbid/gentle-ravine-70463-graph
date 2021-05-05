require("dotenv").config()
const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    itemId: {
        type: String
    },
    userId: {
        type:String
    },
    user: {
        type:String,
        default: "User comment"
    },
    comment: {
        type: String,
        default: "This is an automated comment"
    }
})

module.exports.Comments = mongoose.model("Comments", commentSchema)