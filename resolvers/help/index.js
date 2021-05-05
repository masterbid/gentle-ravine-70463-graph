const { PubSub } = require("apollo-server")

const {getHelpsFn } = require("./getHelpsFn") 
const { getHelpFn } = require("./getHelpFn") 
const {addHelpFn } = require("./addHelpFn") 
const {deleteHelpFn } = require("./deleteHelpFn") 
const {updateHelpFn } = require("./updateHelpFn") 
const { HELP_ADDED } = require("../../subscriptions/help")


module.exports = {
    Subscription: {
        helpAdded: {
            subscribe: (_,args,{pubsub}) => pubsub.asyncIterator(HELP_ADDED)
        }
    },

    Query: {
        getHelps(_, args, context){
            return getHelpsFn(_, args, context)
        },
        getHelp(_, { helpId }, context){
            return getHelpFn(_, {helpId}, context)
        }
    }, 
    Mutation: {
        addHelp(_, {helpTitle, helpBody}, context){
            
            return addHelpFn(_, {helpTitle, helpBody}, context)
        },
        deleteHelp(_, {id}, context){
            return deleteHelpFn(_, {id}, context)
        },
        updateHelp(_, {helpId, helpTitle, helpBody}, context){
            return updateHelpFn(_, {helpId, helpTitle, helpBody}, context)
        }
    }
}