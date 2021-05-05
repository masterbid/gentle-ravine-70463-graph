module.exports.validateHelpInput = (title, body) => {
    const helpError = {}
    if(title === "") helpError.title = "Help title must not be empty"
    if(body === "") helpError.body = "Help body must not be empty"
    return {
        helpError,
        helpValid: Object.keys(helpError).length < 1
    }
}