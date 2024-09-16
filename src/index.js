// import Student from '../src/student.js'
import Cohort from '../src/cohort.js'

class CohortManager {
  constructor() {
    this.cohorts = []
    this.nextCohortId = 1
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length === 0) {
      throw Error('Cohort name must be a non-empty string')
    } else if (
      this.cohorts.some((cohort) => cohort.cohortName === cohortName)
    ) {
      throw Error('Cohort with the same name already exists')
    } else {
      const newCohort = new Cohort(this.nextCohortId++, cohortName, [])
      this.cohorts.push(newCohort)
      return newCohort
    }
  }

  searchCohort(cohortName) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!foundCohort) {
      throw Error('Cohort cant be found!')
    }
    return foundCohort
  }

  removeCohortByName(cohortName) {
    const foundIndex = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )
    if (foundIndex === -1) {
      throw Error('cohortName cant be found!')
    }
    this.cohorts.splice(foundIndex, 1)
  }

  addStudentToCohort(cohort, student) {
    const foundCohort = this.cohorts.find((c) => c.id === cohort.id)
    if (foundCohort) {
      foundCohort.addStudent(
        student.studentID,
        student.firstName,
        student.lastName,
        student.githubUsername,
        student.email
      )
    } else {
      throw Error('student not found')
    }
  }

  removeStudentFromCohort(cohort, student) {
    const foundCohort = this.cohorts.find((c) => c.id === cohort.id)
    if (foundCohort) {
      foundCohort.removeStudent(student.studentID)
    } else {
      throw Error('Student not found in the cohort')
    }
  }
}

export default CohortManager
