class Student {
  constructor(firstName, lastName, gitHub, email, studentIDCount) {
    this.studentId = studentIDCount
    this.firstName = firstName
    this.lastName = lastName
    this.gitHub = gitHub
    this.email = email
    this.cohorts = []
  }
}

export { Student }
