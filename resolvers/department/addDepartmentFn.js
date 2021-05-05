const { UserInputError } = require("apollo-server")

const { Department } = require("../../models/departments")
const { checkForAuthorizedUser } = require("../../util/checkForAuthorizedUser")
const { userCheckViaId } = require("../../util/userCheckViaId")
const check_auth = require("../../util/check_auth")
const { validateDepartmentInput } = require("../../validation/department/validateDepartmentInput")
const { CAN_ADD_DEPARTMENT } = require("../../permissions/department")


module.exports.addDepartmentFn = async (_, {deptShortName, deptFullName }, context) => {
    const { departmentValid, departmentError } = validateDepartmentInput(deptShortName, deptFullName)
    if(!departmentValid) throw new UserInputError("Department Error", { departmentError})

    await checkForAuthorizedUser(context, [CAN_ADD_DEPARTMENT])

    const loggedInUser = await check_auth(context)

    const user = await userCheckViaId(loggedInUser.id)
    if(!user){
        departmentError.general = "User not found"
        throw new UserInputError("User not found", { departmentError})
    }

    const department = Department.create({ deptShortName: deptShortName.toUppercase(), deptFullName: deptFullName.toUppercase(), creatorId: `${user.id}`, createdBy: `${user.firstName} ${user.lastName}`, updatedAt: new Date().toString()})
    
    return department
}





module.exports.addHelpFn = async (_, {helpTitle, helpBody}, context) => {
    
    

    const help = Help.create({ title: helpTitle, body: helpBody, uploadedBy: `${user.firstName} ${user.lastName}`, updatedAt: new Date().toString()})
    
    return help
}