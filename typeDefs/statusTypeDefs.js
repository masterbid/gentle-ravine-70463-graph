module.exports.statusType = `

enum StatusTypes {
    Approved
    Pending
    Rejected
    Treated
    Retired
}

type Status {
    id: ID!
    requestId: ID!
    status: [String]!
}
`
module.exports.statusQuery = `
    getAllStatus: [Status]!
    getStatus(id: String!): Status!
    
`

module.exports.statusMutation = `
    addStatus(id: ID!, requestId: ID!, status: StatusTypes!): Status!
    deleteStatus(id: String!): Status!
    
`