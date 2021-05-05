const { UserInputError } = require("apollo-server")
const {Help} = require("../models/help")

module.exports.helpCheckViaId = async (id) => {
    const help = await Help.findById(id)
    if(!help) throw new UserInputError("Help ID Check Error", "Help not found") 
    return help  
    
}
