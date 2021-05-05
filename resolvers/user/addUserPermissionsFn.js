const { UserInputError } = require("apollo-server")

const { userCheckViaEmail } = require("../../util/userCheckViaEmail")
const { userPermissionExist } = require("../../util/userPermissionExist")
const { validateInputEmail} = require("../../validation/validateInputEmail")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { CAN_ADD_USER_PERMISSION } = require("../../permissions/user")

module.exports = {
    async addUserPermissionsFn(_, email, permissions, context){
        const { emailValid, emailErrors } = validateInputEmail(email)
        if(!emailValid) throw new UserInputError("ID Errors", { emailErrors })

        await checkForAuthorizedUser(context, [CAN_ADD_USER_PERMISSION])

        const user = await userCheckViaEmail(email)
        if(!user){
            emailErrors.general = "User not found"
            throw new UserInputError("User not found", { emailErrors })
        }
        
        const userPermission = userPermissionExist(user.permissions, permissions)
        if(userPermission){
            emailErrors.general = `Permission(s) ${userPermission} already exist`
            throw new UserInputError("Permission already exist", { emailErrors })
        }
        
        user.permissions = [ ...user.permissions, ...permissions]
        user.updatedAt = new Date().toString()
        return await user.save()
    }
}