'use strict'

const { graphql, buildSchema } = require('graphql')

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

// Ejecutamos graphql
graphql(schema, '{ saludo }', resolvers).then((data) => {
    console.log(data)
})