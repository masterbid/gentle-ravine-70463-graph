const check_auth = require("../../util/check_auth")
const { userCheckViaId } = require("../../util/userCheckViaId")

module.exports.logoutFn = async (_, args, context) => {
    const logoutError = {}
    const verifiedUser = await check_auth(context)
    const user = await userCheckViaId(verifiedUser.id)
    if(!user){
        logoutError.general = "User not found"
        throw new UserInputError("Logout ID Error", { user })
    }
    user.refreshToken = ""
    return user.save()
}