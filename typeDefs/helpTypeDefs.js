module.exports.helpType = `
    type Help {
        id: ID!
        title: String!
        body: String!
        createdAt: String!
        updatedAt: String!
    }
`
module.exports.helpQuery = `
    getHelps: [Help]
    getHelp(helpId: String): Help!
`
module.exports.helpMutation = `
    addHelp(helpTitle: String!, helpBody: String!): Help!
    deleteHelp(id: String!): Help!
    updateHelp(helpId: String!, helpTitle: String!, helpBody: String!): Help!
`
module.exports.helpSubscription = `
    helpAdded: Help!
`
