
const { UserInputError } = require("apollo-server")

const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { userCheckViaId } = require("../../util/userCheckViaId")
const check_auth = require("../../util/check_auth")
const { CAN_DELETE_DEPARTMENT } = require("../../permissions/department")
const { validateIdInput } = require("../../validation/validateIdInput")
const { departmentCheckViaId } = require("../../util/departmentCheckViaId")


module.exports.deleteDepartmentFn = async (_, { id }, context) => {
    const { idValid, idError } = validateIdInput(id)
    if(!idValid) throw new UserInputError("Department id Error", { idError})

    await checkForAuthorizedUser(context, [CAN_DELETE_DEPARTMENT])

    const loggedInUser = await check_auth(context)

    const user = await userCheckViaId(loggedInUser.id)
    if(!user){
        idError.general = "User not found"
        throw new UserInputError("User not found", { idError})
    }

    const department = await departmentCheckViaId(id)
    if(!department) {
        idError.general = "Department not found"
        throw new UserInputError("Department not found", { idError})
    }
    return department.remove()
}





module.exports.addHelpFn = async (_, {helpTitle, helpBody}, context) => {
    
    

    const help = Help.create({ title: helpTitle, body: helpBody, uploadedBy: `${user.firstName} ${user.lastName}`, updatedAt: new Date().toString()})
    
    return help
}