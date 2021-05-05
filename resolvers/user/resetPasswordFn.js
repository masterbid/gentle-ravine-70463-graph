const { UserInputError } = require("apollo-server")

const {validatePasswordInput} = require("../../validation/validatePasswordInput")
const {validateInputEmail} = require("../../validation/validateInputEmail")
const { userCheckViaEmail } = require("../../util/userCheckViaEmail")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { hashPassword } = require("../../util/hashPassword")

module.exports.resetPasswordFn = async (_, email, newPassword, confirmNewPassword, context) => {
    const {emailValid, emailError} = validateInputEmail(email)
    const {passwordValid, passwordError} = validatePasswordInput(_, newPassword, confirmNewPassword)
    if(!passwordValid) throw new UserInputError("Password Errors", { passwordError })
    if(!emailValid) throw new UserInputError("ID Errors", { emailError })

    await checkForAuthorizedUser(context,  [CAN_RESET_PASSWORD])
    
    const user = await userCheckViaEmail(email)
    if(!user){
        emailError.general = "User not found"
        throw new UserInputError("User not found", { emailError })
    }
    
    user.password = await hashPassword(newPassword) 
    user.updatedAt = new Date().toString()
    return await user.save()
}