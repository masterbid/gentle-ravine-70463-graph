const { UserInputError } = require("apollo-server")
const {Department} = require("../models/departments")

module.exports.departmentCheckViaId = async (id) => {
    const department = await Department.findById(id)
    if(!department) throw new UserInputError("Department ID Check Error", "Department not found") 
    return department  
    
}
