const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports.validateRegisterInput = (
    firstName,
    lastName,
    email,
    role,
    password,
    confirmPassword,
    department,
    designation
) => {
    const errors = {}

    if(firstName.trim() === ""){
        errors.firstName = "FirstName can't be empty"
    }
    if(lastName.trim() === ""){
        errors.lastName = "LastName can't be empty"
    }
    if(email.trim() === ""){
        errors.email = "Email can't be empty"
    }else{
        
        if(!email.match(regEx)){
            errors.email = "Email must be a valid email address"
        }
    }
    if(role.trim() === ""){
        errors.role = "Role can't be empty"
    }

    const passwordLength = 6
    if(password === ""){
        errors.password = "Password can't be empty"
    }
    if(password.length < passwordLength){
        errors.password = "Password must be atleast six(6) characters"
    }
    else if(password.toLowercase() !== confirmPassword.toLowercase()){
        errors.confirmPassword = "Password must match"
    }
    if(designation.trim() === ""){
        errors.designation = "Designation can't be empty"
    }
    if(department.trim() === ""){
        errors.department = "Department Password can't be empty"
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}





