const Cohort = require('./Cohort.js')

class CohortManager {
  constructor() {
    this.cohortsList = []
    this.studentsList = []
  }

  createCohort(name) {
    this.cohortsList.push(new Cohort(name))
  }

  getAllCohorts() {
    return this.cohortsList
  }

  searchCohort(name) {
    let result
    this.cohortsList.forEach((element) => {
      if (element.getName() === name) {
        result = element
      }
    })
    return result
  }

  addStudentToCohort(firstName, lastName, username, email, cohortName) {
    this.searchCohort(cohortName).addStudent(
      firstName,
      lastName,
      username,
      email
    )
  }
}

module.exports = CohortManager
