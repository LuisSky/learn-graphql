const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')


const server = new ApolloServer({
  typeDefs: importSchema('./schemas/index.graphql'),
  resolvers
})


server.listen(4000).then(({url}) => {
  console.log(`Servidor rodando em ${url}`)
})



// const { ApolloServer, gql } = require('apollo-server')

// const typeDefs = gql`
  
//   type Query {
//     returnArray:[Int]
//   }
// `

// const resolvers = {

//   Query: {
//     returnArray() {
//       const numbers = Array(3).fill(1).map((e) => e*10+1)
//       return numbers
//     }
//   }
// }


// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })


// server.listen(4000).then(({url}) => {
//   console.log(`Servidor rodando em ${url}`)
// })



// const { ApolloServer, gql } = require('apollo-server')

// const typeDefs = gql`
//   scalar Date
  
//   type User {
//     name: String
//     age: Int
//     mail: String
//   }
//   type Query {
//     datenow: Date
//     usuario: User
//     featuredProduct: Product
//   }
  
//   type Product {
//     name: String!
//     price: Float!
//     discountPrice: Float
//     priceWithOff: Float
//   }
// `

// const resolvers = {

  
//   /* Added a mail funcion to send a valid response to resolver */
  
//   Product: {
//     priceWithOff (product) {
      
//       if(!product.discountPrice) return product.price
//       const { price, discountPrice } = product
//       return price-(price*discountPrice)
//     }
//   },
//   User: {
//     mail(obj) {
//       console.log(obj)
//       return 'user@mail.com'
//     }
//   },
//   Query: {
//     featuredProduct () {
//       return {
//         name: 'Product 1',
//         price: 100.0,
//         discountPrice: 0.10
//       }
//     },
//     datenow() {
//       return `${new Date()}`
//     },
//     usuario () {
//       return {
//         name: 'John Doe',
//         age: 26,
//         other: 'test' // adding a invalid atrr to resolve it with another method in User resolver
//       }
//     }
//   }
// }


// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })


// server.listen(4000).then(({url}) => {
//   console.log(`Servidor rodando em ${url}`)
// })