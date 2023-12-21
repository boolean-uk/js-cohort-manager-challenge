import Cohort from './cohort.js'
import { Student } from './student.js'

class CohortManager {
  constructor() {
    this.cohortList = []
    this.allStudents = []
    this.studentIdCount = 1
  }

  createCohort(name) {
    if (name.length === 0) throw new Error('Cohort needs a name!')
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)
    return cohort
  }

  removeCohort(name) {
    if (name.length === 0) throw new Error('Please enter a cohort name')
    const foundCohort = this.findCohort(name)
    return (this.cohortList = this.cohortList.filter(
      (item) => item.name !== foundCohort.name
    ))
  }

  findCohort(name) {
    const foundCohort = this.cohortList.find((cohort) => cohort.name === name)
    if (!foundCohort) throw new Error('No cohort found with that name')
    return foundCohort
  }

  createStudent(firstName, lastName = '', gitHub = '', email = '') {
    if (!firstName || firstName.length === 0)
      throw new Error('please enter a name to add student')
    if (firstName.length === 0 && email === '')
      throw new Error('please enter a name to add student')

    const student = new Student(
      firstName,
      lastName,
      gitHub,
      email,
      this.studentIdCount
    )
    this.allStudents.push(student)
    this.studentIdCount += 1
    return student
  }

  findStudent(id) {
    if (!id || id.length === 0) throw new Error('please enter a student ID')
    const foundStudent = this.allStudents.find(
      (student) => student.studentId === id
    )
    return foundStudent
  }
}

export { CohortManager }
