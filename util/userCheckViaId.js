const { UserInputError } = require("apollo-server")

const {User} = require("../models/user")

module.exports.userCheckViaId = async (id) => {
    const user = await User.findById(id)
    if(!user) throw new UserInputError("User ID Check Error", "User not found") 
    return user  
    
}
