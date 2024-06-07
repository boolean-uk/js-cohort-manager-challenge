import students from './studentsDB.js'

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.loadStudents()
  }

  loadStudents() {
    const studentData = students.find(
      (std) =>
        std.firstName === this.firstName && std.lastName === this.lastName
    )
    if (studentData) {
      this.githubUsername = studentData.githubUsername
      this.email = studentData.email
      this.id = studentData.id
    } else {
      console.log(
        `There is no student named ${this.firstName} ${this.lastName}\n`
      )
      throw new Error('There is no student with this name or surname')
    }
  }
}

export default Student
