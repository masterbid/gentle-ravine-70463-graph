module.exports.userPermissionExist = (primaryPermissionsList, secondaryPermissionsList) => {
    const availablePermissions = primaryPermissionsList.filter(permission => secondaryPermissionsList.includes(permission))
    if(availablePermissions < 1) return 
    return availablePermissions
}