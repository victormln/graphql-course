'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// Definimos el schema inicial
const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`)

// Configurar resolvers
const resolvers = {
    hello: () => {
        return 'hello world'
    },
    saludo: () => {
        return 'hola!'
    }
}

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at: http://localhost:${port}/api`)
})