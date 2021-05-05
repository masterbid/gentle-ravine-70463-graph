module.exports.retirementType = `

type Retirements {
    id: ID!,
    items: [Items]!,
    requestId: ID!,
    userId: ID!,
    createdAt: String!
}
`
module.exports.retirementQuery = `
    getRetirements: [Retirements]!,
    getRetirementById(id: String!): Retirements!,
    getRetirementsForRequest(requestId: ID!): Retirements!,
    getRetirementByDate(date: String!): [Retirements]!,
    getRetirementByItem(itemId: String!): [Retirements]!
`

module.exports.retirementMutation = `
    addRetirement(title: String!, body: String!): Retirements!
    deleteRetirement(id: String!): Retirements!
    updateRetirement(id: String!, title: String!, body: String!): Retirements!
`