const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    datenow: String
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