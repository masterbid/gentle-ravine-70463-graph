const { UserInputError } = require("apollo-server")


const {userCheckViaEmail} = require("../../util/userCheckViaEmail")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { validateInputEmail} = require("../../validation/validateInputEmail")
const { CAN_GET_USERS } = require("../../permissions/user")

module.exports = {
    async getUserFn(_,email, context){
        const { emailValid, emailErrors } = validateInputEmail(email)
        if(!emailValid) throw new UserInputError("Email Errors", { emailErrors })
        await checkForAuthorizedUser(context, [CAN_GET_USERS])
        const user = await userCheckViaEmail(email)
        if(!user){
            emailErrors.general = "User not found"
            throw new UserInputError("User not found", { emailErrors })
        } 
        return user
    }
}