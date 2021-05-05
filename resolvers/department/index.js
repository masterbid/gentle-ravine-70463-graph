const { addDepartmentFn } = require("./addDepartmentFn")
const { deleteDepartmentFn } = require("./deleteDepartmentFn")
const { getDepartmentByIdFn } = require("./getDepartmentById")
const { getDepartmentByNameFn } = require("./getDepartmentByNameFn")
const { getDepartmentsFn } = require("./getDepartmentsFn")
const { updateDepartmentFn } = require("./updateDepartmentFn")

module.exports = {
    Query: {
        getDepartments(_, args, context){
            return getDepartmentsFn(_, args, context)
        },
        getDepartmentById(_, args, context){
            return getDepartmentByIdFn(_, args, context)
        },
        getDepartmentByName(_, args, context){
            return getDepartmentByNameFn(_, args, context)
        }
    },
    Mutation: {
        addDepartment(_, args, context){
            return addDepartmentFn(_, args, context)
        },
        deleteDepartment(_, args, context){
            return deleteDepartmentFn(_, args, context)
        },
        updateDepartment(_, args, context){
            return updateDepartmentFn(_, args, context)
        }
    }, 
    Subscription: {
        // departmentAdded: {
        //     subscribe: (_, args, { pubsub }) => pubsub.asyncIterator("DEPARTMENT_ADDED")

            
        // }
    }
}