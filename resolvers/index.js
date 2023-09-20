const { users, userTypes } = require('../db/fakedb')


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

module.exports = resolvers