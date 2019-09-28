'use strict'

const { graphql, buildSchema } = require('graphql')

// Definimos el schema inicial
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Configurar resolvers
const resolvers = {
    hello: () => {
        return 'hello world'
    }
}

// Ejecutamos graphql
graphql(schema, '{ hello }', resolvers).then((data) => {
    console.log(data)
})