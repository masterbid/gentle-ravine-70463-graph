require("dotenv").config()
const { ApolloServer, PubSub } = require("apollo-server")
const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors())

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const pubsub = new PubSub()


const server = new ApolloServer({
    playground: true,
    introspection: true,
    typeDefs,
    resolvers,
    tracing: true,
    context: ({ req }) => ({ req, pubsub })
})

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.2ei4n.mongodb.net/${process.env.MONGOBD_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connected successfully")
    server.listen(process.env.PORT || 4000).then(({ url }) => {
        console.log(`🚀Server ready at ${url}`);
      });
    }).catch(err => {
        console.log(err)
        console.log("Database connection failed")
    })
    

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }




