import Cohort from './Cohort.js'

class CohortList {
  constructor() {
    this.list = []
    this.studentsList = []
  }

  // Create Cohort
  createCohort(name) {
    if (name.length === 0) {
      throw new Error('Enter name for create new cohort')
    }

    if (this.list.find((item) => item.name === name)) {
      throw new Error('Cohort with this name has already exist')
    }

    const cohort = new Cohort(this.list.length + 1, name)

    this.list.push(cohort)

    return cohort
  }

  // Find Cohort By Name
  getCohortByName(name) {
    const findCohort = this.list.find((item) => item.name === name) || null

    if (!findCohort) {
      throw new Error('Cohort not Found')
    }

    return findCohort
  }

  // Add student
  addStudent(student, cohortName) {
    if (
      this.studentsList.find((item) => item.studentId === student.studentId)
    ) {
      throw new Error('This student has already added to cohort')
    }

    const findCohort = this.getCohortByName(cohortName)

    if (findCohort.studentsList.length === 24) {
      throw new Error('Exceeded capacity of students')
    }

    findCohort.studentsList.push(student)
    this.studentsList.push(student)

    return findCohort.studentsList
  }

  // Remove Cohort
  removeCohort(name) {
    const findCohort = this.getCohortByName(name)

    this.list = this.list.filter((item) => item.name !== name)

    return findCohort
  }

  // Remove Student
  removeStudent(studentId, cohortName) {
    const findCohort = this.getCohortByName(cohortName)
    const findStudent = findCohort.studentsList.find(
      (item) => item.studentId === studentId
    )

    if (!findStudent) {
      throw new Error('Student not Found')
    }

    findCohort.studentsList = findCohort.studentsList.filter(
      (item) => item.studentId !== studentId
    )

    this.studentsList = this.studentsList.filter(
      (item) => item.studentId !== studentId
    )

    return findStudent
  }

  // Get Student By Id
  getStudentById(studentId) {
    const findStudent = this.studentsList.find(
      (item) => item.studentId === studentId
    )

    if (!findStudent) {
      throw new Error('Student not Found')
    }

    return findStudent
  }

  // Get Student By Name
  getStudentByName(name) {
    const findStudents = this.studentsList
      .map(
        (item) =>
          (item.firstName.toLowerCase() === name.toLowerCase() ||
            item.lastName.toLowerCase() === name.toLowerCase()) &&
          item
      )
      .filter((item) => item !== false)

    if (findStudents.length === 0) {
      throw new Error('Students not found')
    }

    return findStudents
  }
}

export default CohortList
