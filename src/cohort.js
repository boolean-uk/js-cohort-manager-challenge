class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeStudentByName(studentFirstName) {
    const studentIndex = this.students.findIndex(
      (student) => student.firstName === studentFirstName
    )
    if (studentIndex === -1) {
      throw new Error('Student does not exist')
    }
    this.students.splice(studentIndex, 1)
  }
}
export default Cohort
