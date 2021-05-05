const { UserInputError } = require("apollo-server")

const {userCheckViaEmail} = require("../../util/userCheckViaEmail")
const { validateInputEmail} = require("../../validation/validateInputEmail")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { CAN_DELETE_USER } = require("../../permissions/user")

module.exports = {
    async deleteUserFn(_, email , context){

        const { emailValid, emailErrors } = validateInputEmail(email)
        if(!emailValid){
            throw new UserInputError("Email Errors", { emailErrors })
        }

        await checkForAuthorizedUser(context,  [CAN_DELETE_USER])

        const user = await userCheckViaEmail(email)
        if(!user){
            emailErrors.general = "User not found"
            throw new UserInputError("User not found", { emailErrors })
        }
        user.updatedAt = new Date().toString()
        return user.remove()
        
    }
}