const { UserInputError } = require("apollo-server")
const { CAN_UPDATE_HELP } = require("../../permissions/help")

const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { helpCheckViaId } = require("../../util/helpCheckViaId")
const { validateHelpInput } = require("../../validation/help/validateHelpInput")
const { validateIdInput } = require("../../validation/validateIdInput")

module.exports.updateHelpFn = async (_, {helpId, helpTitle, helpBody}, context) => {
    const { idError, idValid } = validateIdInput(helpId)
    const { helpError, helpValid } = validateHelpInput(helpTitle, helpBody)
    if(!idValid ) throw new UserInputError("Update Help Input ID Error", { idError })
    if(!helpValid ) throw new UserInputError("Update Help Input Details Error", { helpError })
    await checkForAuthorizedUser(context, [CAN_UPDATE_HELP])
    const help = await helpCheckViaId(helpId)
    help.title = helpTitle
    help.body = helpBody
    help.updatedAt = new Date().toString() 
    return await help.save()
}