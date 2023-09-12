const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date
  
  type Query {
    datenow: Date
  }
`

const resolvers = {
  Query: {
    datenow() {
      return `${new Date()}`
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