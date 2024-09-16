export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    if (name === undefined) {
      throw new Error(`Name required`)
    }
    if (this.cohorts.find((cohort) => cohort.name === name) !== undefined) {
      throw new Error(`Cohort with name ${name} already exists`)
    }

    this.cohorts.push({
      name: name,
      students: []
    })
  }

  searchCohort(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort === undefined) {
      throw new Error(`Cohort with name ${name} could not be found`)
    }
    return cohort
  }

  addStudent(name, student) {
    const cohort = this.searchCohort(name)
    if (cohort === undefined) {
      throw new Error(`Cohort with name ${name} not found`)
    }
    if (cohort.students.length === 24) {
      throw new Error(`Cohort with name ${name} is at max capacity`)
    }

    try {
      this.searchStudent(student.id)
    } catch {
      cohort.students.push(student)
      return
    }

    throw new Error(`Student with id ${student.id} already exists`)
  }

  removeCohort(name) {
    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== name)
  }

  removeStudent(name, studentId) {
    const cohort = this.searchCohort(name)
    if (cohort !== undefined) {
      cohort.students = cohort.students.filter(
        (student) => student.id !== studentId
      )
    } else {
      throw new Error(`Cohort with id ${studentId} not found`)
    }
  }

  searchStudent(id) {
    const student = this.cohorts
      .map((cohort) => cohort.students)
      .flat()
      .find((student) => student.id === id)

    if (student === undefined) {
      throw new Error(`Student with id ${id} could not be found`)
    }
    return student
  }

  searchStudentByName(firstName, lastName) {
    const student = this.cohorts
      .map((cohort) => cohort.students)
      .flat()
      .find(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )
    if (student === undefined) {
      throw new Error(
        `Student with first name ${firstName} and last name ${lastName} does not exist`
      )
    }
    return student
  }
}
