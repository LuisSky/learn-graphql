const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type UserType {
    id: Int
    name: String
  }
  
  type User {
    id: Int
    userType: UserType
    name: String
    email: String
  }
  
  type Query {
    returnUserById(id: Int): User
    returnAllUsers: [User]
  }
`

const TYPE_USER = 1
const TYPE_ADMIN = 2

const userTypes = [
  { id: TYPE_USER, name: 'Usuario' },
  { id: TYPE_ADMIN, name: 'Admin' }
]


const users = [
  { id: 1, userType: TYPE_USER, name: 'John Doe', email: 'john@mail.com' },
  { id: 2, userType: TYPE_ADMIN, name: 'Alex Cole', email: 'alex@mail.com' },
  { id: 3, userType: TYPE_USER, name: 'Ada Lovelace', email: 'adalov@mail.com' },
  { id: 4, userType: TYPE_ADMIN, name: 'Mark Gates', email: 'mark@mail.com' }
]

const resolvers = {
  User: {
    userType(user) {
      const { userType } = user
      const type = userTypes.filter(t => t.id === userType)
      return type ? type[0] : null
    }
  },
  Query: {
    returnAllUsers() {
      return users
    },
    
    returnUserById(_, args) {
      const { id } = args
      const user = users.filter(user => user.id === id)
      return user ? user[0] : null
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