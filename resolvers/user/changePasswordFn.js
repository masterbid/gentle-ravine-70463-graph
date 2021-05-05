const { UserInputError } = require("apollo-server")

const check_auth = require("../../util/check_auth")
const {validatePasswordInput} = require("../../validation/validatePasswordInput")
const {validateIdInput} = require("../../validation/validateIdInput")
const { userCheckViaId } = require("../../util/userCheckViaId")
const { comparePassword } = require("../../util/comparePassword")
const { hashPassword } = require("../../util/hashPassword")

module.exports.changePasswordFn = async (_, currentPassword, newPassword, confirmNewPassword, context) => {
    const loggedInUser = await check_auth(context)
    const { id } = loggedInUser

    const {idValid, idError} = validateIdInput(id)
    const {passwordValid, passwordError} = validatePasswordInput(currentPassword, newPassword, confirmNewPassword)
    if(!passwordValid) throw new UserInputError("Password Errors", { passwordError })
    if(!idValid) throw new UserInputError("ID Errors", { idError })
    
    const user = await userCheckViaId(id)
    if(!user){
        idError.general = "User not found"
        throw new UserInputError("User not found", { idError })
    }

    if(!await comparePassword(currentPassword,user.password)){
        passwordError.general = "Invalid/Incorrect Current Password"
        throw new UserInputError("Invalid/Incorrect Current Password", { passwordError})
    }

    newPassword = await hashPassword(newPassword)
    user.password = newPassword
    user.updatedAt = new Date().toString()
    return await user.save()
}