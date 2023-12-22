export default class Student {
  constructor(details) {
    const { firstName, lastName, gitHubUserName, email, cohortId } = details

    this.firstName = firstName
    this.lastName = lastName
    this.gitHubUserName = gitHubUserName
    this.email = email
    this.cohortId = cohortId

    for (const key in this.details) {
      if (key === 'studentId') continue

      const val = this.details[key]
      if (typeof val === 'undefined') {
        throw new Error('student missing details')
      }
    }

    this.studentId = Student.nextId()
  }

  get details() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      gitHubUserName: this.gitHubUserName,
      email: this.email,
      cohortId: this.cohortId,
      studentId: this.studentId
    }
  }

  static nextId() {
    if (!this.lastId) this.lastId = 0
    return ++this.lastId
  }

  static resetId() {
    this.lastId = 0
  }
}
