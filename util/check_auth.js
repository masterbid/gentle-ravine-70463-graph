require('dotenv').config()
const jwt = require("jsonwebtoken")
const { AuthenticationError } = require("apollo-server")

module.exports = async (context) =>{
    const authHeader = context.req.headers.authorization
    if(!authHeader) throw new Error("Authorization header must be provided")
    const token = authHeader.split('Bearer ')[1]
    if(!token) throw new Error("Authentication token must be 'Bearer [token]'")
    try{
        const verifiedUser = await jwt.verify(token, process.env.ACCESS_TOKEN)
        return verifiedUser
    }catch(err){
        throw new AuthenticationError("Invalid/Expired Token")
    }
}