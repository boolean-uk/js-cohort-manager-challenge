const { v4: uuidv4 } = require('uuid')

const { requireParam } = require('./utils')

class Student {
  constructor(firstName, lastName, github, email) {
    requireParam('firstName', firstName)
    requireParam('lastName', lastName)
    requireParam('github', github)
    requireParam('email', email)
    this._id = uuidv4()
  }

  get id() {
    return this._id
  }
}
module.exports = Student
