import { myOrganization } from "./organization.js"

class Student {
  constructor(firstName, lastName, email, githubUsername) {
    this.studentID = 0
    this.firstName = firstName
    this.lastName = lastName
    this.email = email || ''
    this.githubUsername = githubUsername || ''
    this.inCohort = {}
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  assignCohort(cohortObj) {
    this.inCohort = cohortObj
  }
}

export default Student
