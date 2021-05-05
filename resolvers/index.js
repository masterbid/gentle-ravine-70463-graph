const usersResolvers = require("./user")
const policyResolvers = require("./policy")
const requestResolvers = require("./request")
const helpResolvers = require("./help")
const departmentResolver = require("./department")
const { User } = require("../models/user")

module.exports = {
    User: {
        fullName: (parent) => {
            return `${parent.firstName} ${parent.lastName}`
        }
        
    },
    Departments: {
        createdBy: (parent) => {
            return User.findById(parent.creatorId)
        }
    },
    
    Query : {
        ...usersResolvers.Query,
        ...policyResolvers.Query,
        ...helpResolvers.Query,
        ...departmentResolver.Query
    },
    Mutation : {
        ...usersResolvers.Mutation,
        ...policyResolvers.Mutation,
        ...helpResolvers.Mutation,
        ...departmentResolver.Mutation
    },
    Subscription: {
        ...helpResolvers.Subscription,
        ...departmentResolver.Subscription
    }
    
    
}