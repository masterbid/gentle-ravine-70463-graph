const { UserInputError } = require("apollo-server")
const { CAN_DELETE_HELP } = require("../../permissions/help")

const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { helpCheckViaId } = require("../../util/helpCheckViaId")
const { validateIdInput } = require("../../validation/validateIdInput")

module.exports.deleteHelpFn = async (_, {id}, context) => {
    const { idError, idValid } = validateIdInput(id)
    if(!idValid) throw new UserInputError ("Delete Help ID Error", { idError })
    await checkForAuthorizedUser(context, [CAN_DELETE_HELP])
    const help = await helpCheckViaId(id)
    if(!help) {
        idError.general = "Help not found"
        throw new UserInputError("Help not found", { idError})
    }
    return help.remove()
}