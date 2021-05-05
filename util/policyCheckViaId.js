const { UserInputError } = require("apollo-server")
const {Policy} = require("../models/policy")

module.exports.policyCheckViaId = async (policyId) => {
    const error = {}
    const policy = await Policy.findById(policyId)
    if(!policy){
        error.general = "Policy not found, Please input a valid policy ID"
        throw new UserInputError("policy Error", { error })
    } 
    return policy

}