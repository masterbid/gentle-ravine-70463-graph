const { UserInputError } = require("apollo-server")

const check_auth = require("../../util/check_auth")
const { validateIdInput } = require("../../validation/validateIdInput")
const { helpCheckViaId } =  require("../../util/helpCheckViaId")

module.exports.getHelpFn = async (_, {helpId}, context) => {
    const { idError, idValid } = validateIdInput(helpId)
    if(!idValid ) throw new UserInputError("Get Help Input ID Error", { idError })
    await check_auth(context)
    const help =  helpCheckViaId(helpId)
    return help
}