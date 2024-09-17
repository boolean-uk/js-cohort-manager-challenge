import Student from './student.js'

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(firstName, lastName, gitUsername, email) {
    const exists = this.students.some((c) => c.gitUsername === gitUsername)
    if (!exists) {
      const { ...student } = new Student(
        firstName,
        lastName,
        gitUsername,
        email
      )
      this.students.push(student)
    }
    return true
  }

  removeStudent(gitUsername) {
    const exists = this.students.some((c) => c.gitUsername === gitUsername)
    if (!exists) return 'ERROR: Student is not in this cohort'

    this.students.forEach((s, index) => {
      if (s.gitUsername === gitUsername) {
        this.students.splice(index, 1)
      }
    })
    return true
  }
}

export default Cohort
