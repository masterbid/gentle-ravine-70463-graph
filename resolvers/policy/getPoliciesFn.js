const {Policy} = require("../../models/policy")
const check_auth = require("../../util/check_auth")

module.exports.getPoliciesFn = async(_,args, context) => {
    await check_auth(context)
    try{
        const policy =  await Policy.find({}).sort({ createdAt: -1})
        if(!policy) throw new Error("No policy found")
        return policy
    }catch(err){
        throw new Error("Policy Search Error", err)
    }
    
}