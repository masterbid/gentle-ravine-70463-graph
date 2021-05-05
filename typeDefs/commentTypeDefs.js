module.exports.commentType = `

enum commentTypes {
    Private
    Public
}

type Comments {
    id: ID!
    requestId: ID!
    commentorId: ID!
    commentBody: String!
    commentedBy: User!
    commentTo: [String]!
    commentType: String!
}
`
module.exports.commentQuery = `
    getComments(requestId: String!): [Comments]!
`

module.exports.commentMutation = `
    addComment(requestId: ID!, commentorId: ID!, commentBody: String!, commentTo: [String]!, commentType: commentTypes!): Comments!,
    deleteComment(id: String!): Comments!
`