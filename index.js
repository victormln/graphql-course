'use strict'

const { graphql, buildSchema } = require('graphql')

// Definimos el schema inicial
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Ejecutamos graphql
graphql(schema, '{ hello }').then((data) => {
    console.log(data)
})