const {Help} = require("../../models/help")
const check_auth  = require("../../util/check_auth")


module.exports.getHelpsFn = async (_, args, context) => {
    await check_auth(context)
    try{
        const help =  await Help.find({})
        if(!help) throw new Error("No Help found")
        return help
    }catch(err){
        throw new Error( err)
    }
}