const TYPE_USER = 1
const TYPE_ADMIN = 2

const userTypes = [
  { id: TYPE_USER, name: 'Usuario' },
  { id: TYPE_ADMIN, name: 'Admin' }
]


const users = [
  { id: 1, userType: TYPE_USER, name: 'John Doe', email: 'john@mail.com', status: 'BLOCKED' },
  { id: 2, userType: TYPE_ADMIN, name: 'Alex Cole', email: 'alex@mail.com', status: 'ACTIVE' },
  { id: 3, userType: TYPE_USER, name: 'Ada Lovelace', email: 'adalov@mail.com', status: 'BLOCKED' },
  { id: 4, userType: TYPE_ADMIN, name: 'Mark Gates', email: 'mark@mail.com', status: 'ACTIVE' }
]

module.exports = { users, userTypes }
