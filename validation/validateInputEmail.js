const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports.validateInputEmail = (
    email
) => {
    const emailErrors = {}

    if(email.trim() === ""){
        emailErrors.email = "Email can't be empty"
    }else{
        
        if(!email.match(regEx)){
            emailErrors.email = "Email must be a valid email address"
        }
    }
    
    return {
        emailErrors,
        emailValid: Object.keys(emailErrors).length < 1
    }
}