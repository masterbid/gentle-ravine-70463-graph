const { UserInputError } = require("apollo-server")
const { CAN_UPDATE_POLICY } = require("../../permissions/policy")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { policyCheckViaId } = require("../../util/policyCheckViaId")
const { validatePolicyInput } = require("../../validation/policy/validatePolicyInput")
const { validateIdInput } = require("../../validation/validateIdInput")

module.exports.updatePolicyFn = async (_, {id, title, body}, context) => {
    const { idError, idValid } = validateIdInput(id)
    const { policyError, policyValid } = validatePolicyInput(title, body)
    if(!idValid ) throw new UserInputError("Update Policy Input ID Error", { idError })
    if(!policyValid ) throw new UserInputError("Update Policy Input Details Error", { policyError })
    await checkForAuthorizedUser(context, [CAN_UPDATE_POLICY])
    const policy = await policyCheckViaId(id)
    policy.title = title
    policy.body = body
    policy.updatedAt = new Date().toString() 
    return await policy.save()
}