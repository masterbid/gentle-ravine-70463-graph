const { UserInputError } = require("apollo-server")

const {Policy} = require("../../models/policy")
const { CAN_ADD_POLICY } = require("../../permissions/policy")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const check_auth = require("../../util/check_auth")
const {userCheckViaId} = require("../../util/userCheckViaId")
const { validatePolicyInput } = require("../../validation/policy/validatePolicyInput")

module.exports.addPolicyFn = async (_, {title, body}, context) => {
    const { policyValid, policyError } = validatePolicyInput(title, body)
    if(!policyValid) throw new UserInputError("Policy errors", {policyError})

    await checkForAuthorizedUser(context, [CAN_ADD_POLICY])
    const loggedInUser = await check_auth(context)

    const user = await userCheckViaId(loggedInUser.id)
    if(!user){
        policyError.general = "User not found"
        throw new UserInputError("User not found", { policyError})
    }
    const policy = Policy.create({ title, body, uploadedBy: `${user.firstName} ${user.lastName}`, updatedAt: new Date().toString()})
    return policy
}