module.exports.validateIdInput = (id) => {
    const idError = {}
    const idLength = 24
    if(id.trim() === "" || id.toString().length < idLength){
        idError.id = "ID can't be empty/Invalid ID string"
    } 
    
    return {
        idError,
        idValid: Object.keys(idError).length < 1
    }
}