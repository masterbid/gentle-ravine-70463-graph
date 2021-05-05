require('dotenv').config()
const jwt = require("jsonwebtoken")

module.exports.generateToken = (user) =>{
    return jwt.sign({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        department: user.department,
        designation: user.designation,
        permissions: user.permissions

    }, process.env.ACCESS_TOKEN, { expiresIn: '5m'})
}
module.exports.generateRefreshToken = (user) =>{
    return jwt.sign({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        department: user.department,
        designation: user.designation,
        permissions: user.permissions

    }, process.env.REFRESH_TOKEN)
}