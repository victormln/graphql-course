'use strict'

const courses = [
    {
        _id: '123-123',
        title: 'Curso graphql',
        teacher: 'Victor',
        description: 'Curso de graphql para novatos',
        topic: 'programacion'
    },
    {
        _id: '124-123',
        title: 'Curso php',
        teacher: 'Victor',
        description: 'Curso de graphql para novatos',
        topic: 'programacion'
    },
    {
        _id: '125-123',
        title: 'Curso docker',
        teacher: 'Victor',
        description: 'Curso de graphql para novatos',
        topic: 'programacion'
    }
]

module.exports = {
    getCourses: () => {
        return courses
    }
}