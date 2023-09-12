const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    ola: String
  }
`

const resolvers = {
  Query: {
    ola() {
      return 'Hello World'
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