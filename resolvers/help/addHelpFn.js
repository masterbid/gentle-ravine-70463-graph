const { UserInputError } = require("apollo-server")

const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { validateHelpInput } = require("../../validation/help/validateHelpInput")
const { userCheckViaId } = require("../../util/userCheckViaId")
const check_auth = require("../../util/check_auth")
const { Help } = require("../../models/help")
const { HELP_ADDED } = require("../../subscriptions/help")
const { CAN_ADD_HELP } = require("../../permissions/help")


module.exports.addHelpFn = async (_, {helpTitle, helpBody}, context) => {
    const { helpValid, helpError } = validateHelpInput(helpTitle, helpBody)
    if(!helpValid) throw new UserInputError("Help Error", { helpError})
    
    await checkForAuthorizedUser(context, [CAN_ADD_HELP])
    const loggedInUser = await check_auth(context)

    const user = await userCheckViaId(loggedInUser.id)
    if(!user){
        helpError.general = "User not found"
        throw new UserInputError("User not found", { helpError})
    }

    const help = Help.create({ title: helpTitle, body: helpBody, uploadedBy: `${user.firstName} ${user.lastName}`, updatedAt: new Date().toString()})
    const {pubsub} = context
    pubsub.publish([HELP_ADDED], {
        helpAdded: help
    })
    return help
}