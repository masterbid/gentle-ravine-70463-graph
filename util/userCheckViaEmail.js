const { UserInputError } = require("apollo-server")
const {User} = require("../models/user")

module.exports.userCheckViaEmail = async (email) => {
    const user = await User.findOne({ email: email.toLowerCase() })
    if(!user) throw new UserInputError("User Email Check Error","User not found") 
    return user  
    
}
