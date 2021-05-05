const { gql } = require("apollo-server")

const { commentType, commentQuery, commentMutation } = require("./commentTypeDefs")
const { departmentType, departmentQuery, departmentMutation } = require("./departmentTypeDefs")
const { helpType, helpQuery, helpMutation, helpSubscription } = require("./helpTypeDefs")
const { itemType, itemQuery } = require("./itemTypeDef")
const { policyType, policyQuery, policyMutation } = require("./policyTypeDefs")
const { requestQuery, requestMutation, requestType } = require("./requestTypeDefs")
const { retirementType, retirementQuery, retirementMutation } = require("./retirementTypeDefs")
const { statusType, statusQuery, statusMutation } = require("./statusTypeDefs")
const { userType, userInputs, userQuery, userMutation } = require("./userTypeDefs")
const { vendorType, vendorQuery, vendorMutation } = require("./vendorTypeDefs")

module.exports = gql `
    # Types
    ${userType}
    ${policyType}
    ${helpType}
    ${itemType}
    ${requestType}
    ${vendorType}
    ${commentType}
    ${retirementType}
    ${statusType}
    ${departmentType}
    
    # User Inputs
    ${userInputs}

    # Query
    type Query{
        ${userQuery}
        ${policyQuery}
        ${helpQuery}
        ${commentQuery}
        ${itemQuery}
        ${requestQuery}
        ${retirementQuery}
        ${statusQuery}
        ${vendorQuery}
        ${departmentQuery}
    }

    # Mutation
    type Mutation {
        ${userMutation}
        ${policyMutation}
        ${helpMutation}
        ${commentMutation}
        ${requestMutation}
        ${retirementMutation}
        ${statusMutation}
        ${vendorMutation}
        ${departmentMutation}
    }

    type Subscription {
        ${helpSubscription}
    }
`