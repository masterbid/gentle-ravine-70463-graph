const { Items } = require("../../models/items")
const { Comments } = require("../../models/comments")
const { Status } = require("../../models/status")
const { getRequestsFn } = require("./getRequestsFn")
const { getRequestFn } = require("./getRequestFn")
const { getRequestsByStatusFn } = require("./getRequestsByStatusFn")
const { getRequestsByDateFn } = require("./getRequestsByDateFn")

module.exports = {
    Query: {
        getRequests(_, args, context){
            return getRequestsFn(_, args, context)
        },
        getRequest(_, args, context){
            return getRequestFn(_, {requestId}, context)
        },
        getRequestsByDate(_, args, context){
            return getRequestsByDateFn(_, {requestDate}, context)
        },
        getRequestsByStatus(_, args, context){
            return getRequestsByStatusFn(_, {requestStatus}, context)
        }
            
    }, 
    Request: {
        items(parent){
            return Items.filter(item => item.requestId === parent.id)
        },
        comments(parent){
            return Comments.filter(comment => comment.requestId === parent.id)
        },
        status(parent){
            return Status.filter(status => status.requestId === parent.id)
        }
    },
    Mutation: {

    }
}