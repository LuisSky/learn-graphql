const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date
  
  type User {
    name: String
    age: Int
    mail: String
  }
  type Query {
    datenow: Date
    usuario: User
  }
`

const resolvers = {
  User: {
    mail(obj) {
      return 'user@mail.com'
    }
  },  
  Query: {
    datenow() {
      return `${new Date()}`
    },
    usuario () {
      return {
        name: 'John Doe',
        age: 26,
        other: 'test'
      }
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})


server.listen(4000).then(({url}) => {
  console.log(`Servidor rodando em ${url}`)
})