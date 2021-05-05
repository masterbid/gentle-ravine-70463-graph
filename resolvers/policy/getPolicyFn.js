const check_auth = require("../../util/check_auth")
const { policyCheckViaId } = require("../../util/policyCheckViaId")

module.exports.getPolicyFn = async(_,{id}, context) => {
    await check_auth(context)
    validateIdInput(id)
    const policy =  policyCheckViaId(id)
    return policy
    
}