const { UserInputError } = require("apollo-server")
const { CAN_DELETE_POLICY } = require("../../permissions/policy")

const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { policyCheckViaId } = require("../../util/policyCheckViaId")
const { validateIdInput } = require("../../validation/validateIdInput")

module.exports.deletePolicyFn = async (_, {id}, context) => {
    const { idError, idValid } = validateIdInput(id)
    if(!idValid) throw new UserInputError ("Delete policy ID Error", { idError })
    await checkForAuthorizedUser(context, [CAN_DELETE_POLICY])
    const policy = await policyCheckViaId(id)
    if(!policy) {
        idError.general = "Policy not found"
        throw new UserInputError("Policy not found", { idError})
    }
    return policy.remove()
     
}