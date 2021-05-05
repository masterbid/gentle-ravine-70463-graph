const { UserInputError } = require("apollo-server")
const { Department } = require("../../models/departments")

module.exports.availableDepartmentCheck = async (dept) => {
    const department = await Department.findOne({ deptFullName: dept.toUppercase()},{deptShortName: dept.toUppercase()})
    if(!department) throw UserInputError(" The department entered is not an approved department, Please try again")
    return department
}