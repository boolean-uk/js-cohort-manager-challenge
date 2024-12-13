class CohortManager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  createCohort(name) {
    if (name === undefined) {
      throw new Error('No value given')
    }
    if (typeof name !== 'string') {
      throw new Error('Name must be a string')
    }
    this.cohorts.push({ name: name, students: [] })
  }

  search(cohort) {
    const cohortSearch = this.cohorts.find((c) => c.name === cohort)
    if (cohortSearch === undefined) {
      throw new Error("This cohort doesn't exist")
    }
    return cohortSearch
  }

  removeCohort(cohort) {
    let cohortIndex
    this.cohorts.forEach((c, index) => {
      if (cohort === c.name) {
        cohortIndex = index
      }
    })
    if (cohortIndex === undefined) {
      throw new Error("This cohort doesn't exist")
    }
    this.cohorts.splice(cohortIndex, 1)
  }

  addStudent(cohort, student) {
    let cohortIndex
    this.cohorts.forEach((c, index) => {
      if (cohort === c.name) {
        cohortIndex = index
      }
    })
    if (cohortIndex === undefined) {
      throw new Error("This cohort doesn't exist")
    }
    if (typeof student !== 'object') {
      throw new Error(
        'Student object needs an: firstName, lastName, github, email'
      )
    }
    if (
      student.firstName === undefined ||
      student.lastName === undefined ||
      student.gitHub === undefined ||
      student.email === undefined
    ) {
      throw new Error(
        'Student object needs an: firstName, lastName, github, email'
      )
    }
    student.studentId = this.id
    this.id++
    this.cohorts[cohortIndex].students.push(student)
  }

  removeStudent(cohort, studentId) {
    let cohortIndex
    this.cohorts.forEach((c, index) => {
      if (cohort === c.name) {
        cohortIndex = index
      }
    })
    if (cohortIndex === undefined) {
      throw new Error("This cohort doesn't exist")
    }
    if (studentId === undefined) {
      throw new Error('studentId missing')
    }

    let studentIndex
    this.cohorts[cohortIndex].students.forEach((s, index) => {
      if (studentId === s.studentId) {
        studentIndex = index
      }
    })
    if (studentIndex === undefined) {
      throw new Error("This student doesn't exist in the cohort")
    }
    this.cohorts[cohortIndex].students.splice(studentIndex, 1)
  }
}

export default CohortManager
