module.exports.policyType = `
type Policy {
    id: ID!
    title: String!
    body: String!
    uploadedBy: String!
    createdAt: String!
    updatedAt: String!
}
`
module.exports.policyQuery = `
    getPolicies: [Policy]!
    getPolicy(id: String!): Policy!
`

module.exports.policyMutation = `
    addPolicy(title: String!, body: String!): Policy!
    deletePolicy(id: String!): Policy!
    updatePolicy(id: String!, title: String!, body: String!): Policy!
`