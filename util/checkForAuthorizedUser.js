const { UserInputError } = require("apollo-server")

const check_auth = require("./check_auth")
const {userPermissionExist} = require("./userPermissionExist")

module.exports.checkForAuthorizedUser = async (context, requiredPermissions) => {
    const errors = {}
    const verifiedUser = await check_auth(context)
    const authorizedUserPermission = userPermissionExist(verifiedUser.permissions, requiredPermissions)
    if(!authorizedUserPermission){
        errors.general = `You are not authorized to perform this action`
        throw new UserInputError("You are not authorized to perform this action", { errors })
    }
}