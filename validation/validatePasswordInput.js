module.exports.validatePasswordInput =(currentPassword, newPassword, confirmNewPassword) => {
    const passwordError = {}
    if(currentPassword === ""){
        passwordError.currentPassword = "Current Password can't be empty"
    }
    const passwordLength = 6
    if(newPassword < passwordLength){
        passwordError.newPassword = "New Password must be atleast six(6) characters"
    }
    if(newPassword === ""){
        passwordError.newPassword = "New Password can't be empty"
    }
    else if(newPassword !== confirmNewPassword){
        passwordError.confirmNewPassword = "Password must match"
    }
    
    return {
        passwordError,
        passwordValid: Object.keys(passwordError).length < 1
    }
}