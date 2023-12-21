import Student from './student.js'

class Cohort {
  constructor() {
    this.cohortList = []
    this.studentsList = []
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string')
      throw new Error('cohort name must be a valid string')
    const newCohort = { name: cohortName, students: [] }
    this.cohortList.push(newCohort)
    return true
  }

  findCohort(cohortName) {
    const cohortToFind = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!cohortToFind) throw new Error('cohort does not exist')
    return cohortToFind
  }

  enrolStudent(firstName, lastName, githubUsername, email) {
    const newStudent = new Student(firstName, lastName, githubUsername, email)
    this.studentsList.push(newStudent)
    return newStudent
  }

  findStudent(studentId) {
    const studentToFind = this.studentsList.find(
      (student) => student.id === studentId
    )
    if (!studentToFind) throw new Error('student does not exist')
    return studentToFind
  }

  addStudentToCohort(cohortName, studentId) {
    const student = this.findStudent(studentId)
    const cohort = this.findCohort(cohortName)
    cohort.students.push(student)
    return student
  }

  removeCohort(cohortName) {
    const cohort = this.cohortList.find((cohort) => cohort.name === cohortName)
    if (!cohort)
      throw new Error('cohort does not exist, unable to remove cohort')
    const index = this.cohortList.indexOf(cohort)
    this.cohortList.splice(index, 1)
    return true
  }
}

export default Cohort
