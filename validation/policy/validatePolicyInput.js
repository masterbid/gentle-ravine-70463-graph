
module.exports.validatePolicyInput = (title, body) => {
    const policyError = {}
    if(title === "") policyError.title = "Policy title must not be empty"
    if(body === "") policyError.body = "Policy body must not be empty"
    return {
        policyError,
        policyValid: Object.keys(policyError).length < 1
    }
}