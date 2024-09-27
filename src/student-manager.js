import { Manager } from './manager.js'

class StudentManager extends Manager {
  constructor() {
    super()
    this.searchResults = []
  }

  searchSchoolById(studentId) {
    const foundStudent = this.list.find((student) => student.id === studentId)
    if (!foundStudent) {
      throw new Error('student not found')
    }
    return foundStudent
  }

  searchByFirstName(firstName, array) {
    this.searchResults = array.filter(
      (student) => student.firstName === firstName
    )
    if (this.searchResults.length === 0) {
      throw new Error('no students found with this first name')
    }
    return this.searchResults
  }

  searchByLastName(lastName, array) {
    this.searchResults = array.filter(
      (student) => student.lastName === lastName
    )
    if (this.searchResults.length === 0) {
      throw new Error('no students found with this last name')
    }
    return this.searchResults
  }

  searchByFirstAndLastName(name) {
    this.searchResults = []
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    try {
      this.searchByFirstName(firstName, this.list)
      this.searchByLastName(lastName, this.searchResults)
    } catch {
      throw new Error('no such first and last name combination')
    }
    return this.searchResults
  }
}

export { StudentManager }
