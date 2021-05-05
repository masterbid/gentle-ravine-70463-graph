module.exports.validateDepartmentInput = (deptShortName, deptFullName, creatorId) => {
    const departmentError = {}
    if(deptShortName === "") departmentError.deptShortName = "Department Short Name must not be empty"
    if(deptFullName === "") departmentError.deptFullName = "Department Full Name must not be empty"
    return {
        departmentError,
        departmentValid: Object.keys(departmentError).length < 1
    }
}