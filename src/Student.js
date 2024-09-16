class Student {
  constructor(studentId = new Date(), firstName, lastName, githubName, email) {
    this.studentId = studentId
    this.firstName = firstName
    this.lastName = lastName
    this.githubName = githubName
    this.email = email
  }
}

export default Student
