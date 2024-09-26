class Cohort {
  constructor(name) {
    this.NameOfCohort = name
    this.students = []
  }

  addStudentToCohort(student) {
    this.students.push(student)
  }

  deleteStudentById(studentId) {
    const studentIndex = this.findStudentIndexById(studentId)

    if (studentIndex === -1) {
      throw new Error('This student does not exist')
    }

    this.students.splice(studentIndex, 1)
  }

  findStudentIndexById(studentId) {
    return this.students.findIndex((student) => student.studentId === studentId)
  }
}

export default Cohort
