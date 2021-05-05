const { getPoliciesFn } = require("./getPoliciesFn")
const { getPolicyFn } = require("./getPolicyFn")
const { addPolicyFn } = require("./addPolicyFn")
const { deletePolicyFn } = require("./deletePolicyFn")
const { updatePolicyFn } = require("./updatePolicyFn")


module.exports = {
    Query: {
        getPolicies(_, args, context){
            return getPoliciesFn(_, args, context)
        },
        getPolicy(_, {id}, context){
            return getPolicyFn(_, {id}, context)
        }
    },
    Mutation: {
        addPolicy(_, {title, body}, context){
            return addPolicyFn(_, {title, body}, context)
        },
        deletePolicy(_, {id}, context){
            return deletePolicyFn(_, {id}, context)
        },
        updatePolicy(_, {id, title, body}, context){
            return updatePolicyFn(_, {id, title, body}, context)
        } 
    }
}