const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports.validateUserUpdateInput = (
    currentEmail,
    firstName,
    lastName,
    email,
    role,
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
    if(currentEmail.trim() === ""){
        errors.currentEmail = "Current Email can't be empty"
    }
    else{
        
        if(!currentEmail.match(regEx)){
            errors.currentEmail = "Current Email must be a valid email address"
        }
    }
    if(email.trim() === ""){
        errors.email = "Email can't be empty"
    }
    else{
        
        if(!email.match(regEx)){
            errors.email = "Email must be a valid email address"
        }
    }
    if(role.trim() === ""){
        errors.role = "Role can't be empty"
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