

module.exports.requestType = `
type Request {
    id: ID!,
    date: String!,
    purpose: String!,
    description: String!,
    department: String!,
    userId: ID!,
    total: Int!,
    items: [Items!]!,
    comments: [Comments]!,
    status: [Status]!,
    uploadedBy: String!,
    updatedAt: String!
}

`
module.exports.requestQuery = `
    getRequests: [Request]!,
    getRequest(id: String!): Request!,
    getRequestByStatus(id: ID!, status: [String]!): [Request]!,
    getRequestsByDate(date: String!): [Request]!
`

module.exports.requestMutation = `
    addRequest(title: String!, body: String!): Request!
    deleteRequest(id: String!): Request!
    updateRequest(id: String!, title: String!, body: String!): Request!
`