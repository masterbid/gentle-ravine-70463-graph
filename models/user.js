require("dotenv").config()
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your First Name"],
        lowercase: true,
        minlength: [3, "Your First Name must be atleast 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter your Last Name"],
        lowercase: true,
        minlength: [3, "Your Last Name must be atleast 3 characters long"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Minimum password length is 6 characters"]
    },  
    role: {
        type: String,
        required: [true, "Please enter the required role"],
        lowercase: true
    }, 
    department: {
        type: String,
        required: [true, "Please enter a department"],
    }, 
    designation: {
        type: String,
        required: [true, "Please enter a designation"],
    }, 
    refreshToken: {
        type: String
    },
    createdAt: {
        type: String,
        default: new Date().toString()
    }, 
    updatedAt: {
        type: String,
        required: true
    }, 
    lastLoggedIn: {
        type: String
    }, 
    permissions: {
        type: Array
    }
})


module.exports.User = mongoose.model("User", UserSchema)

