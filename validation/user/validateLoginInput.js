const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports.validateLoginInput = (email, password) => {
    const errors = {}
    if(email.trim() === ""){
        errors.email = "Email can't be empty"
    }else{
        
        if(!email.match(regEx)){
            errors.email = "Email must be a valid email address"
        }
    }
    if(password === ""){
        errors.password = "Password can't be empty"
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}