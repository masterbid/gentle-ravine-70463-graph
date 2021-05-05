const { UserInputError } = require("apollo-server")

const {userCheckViaEmail} = require("../../util/userCheckViaEmail")
const {userPermissionExist} = require("../../util/userPermissionExist")
const { validateInputEmail} = require("../../validation/validateInputEmail")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { CAN_DELETE_USER_PERMISSION } = require("../../permissions/user")

module.exports = {
    async deleteUserPermissionsFn(_, email, permissions, context){
        const { emailValid, emailErrors } = validateInputEmail(email)
        if(!emailValid) throw new UserInputError("Email Errors", { emailErrors })

        await checkForAuthorizedUser(context, [CAN_DELETE_USER_PERMISSION])

        const user = await userCheckViaEmail(email)
        if(!user){
            emailErrors.general = "User not found"
            throw new UserInputError("User not found", { emailErrors })
        } 

        const userPermission = userPermissionExist(user.permissions, permissions)
        if(!userPermission){
            emailErrors.general = `Permission(s) ${permissions} doesn't exist`
            throw new UserInputError("Permission doesn't exist", { emailErrors })
        }
        const filterPermission = user.permissions.filter(permission => !permission.includes(userPermission))
        user.permissions = [...filterPermission]
        user.updatedAt = new Date().toString()
        return await user.save()
    }
}