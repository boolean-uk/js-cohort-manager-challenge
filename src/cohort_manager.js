const Cohorts = require('./cohorts.js')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(cohortName) {
    const cohortToAdd = new Cohorts(cohortName)
    this.cohortList.push(cohortToAdd)
    return this.cohortList
  }

  searchByCohortName(cohortName) {
    let cohortFound = false
    let cohort
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        cohortFound = true
        cohort = this.cohortList[i]
        break
      }
    }
    if (cohortFound === false) {
      return 'COHORT NOT FOUND'
    }
    return cohort
  }

  addStudent(cohortName, studentName, gitHub, email) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        const currentCohort = this.cohortList[i]
        currentCohort.addStudentToStudentList(
          this.studentId,
          studentName,
          gitHub,
          email
        )
        this.studentId++
        return currentCohort
      }
    }
    return 'COHORT NOT FOUND'
  }

  removeCohort(cohortName) {
    let cohortFound = false
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        this.cohortList.splice(i, 1)
        cohortFound = true
        return this.cohortList
      }
    }
    if (cohortFound === false) {
      return 'NOT A VALID COHORT NAME'
    }
  }

  findCohort(cohort) {
    let foundCohort = null
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohort) {
        foundCohort = this.cohortList[i]
      }
    }
    return foundCohort
  }

  removeStudent(cohort, student) {
    const theCohort = this.findCohort(cohort)
    if (theCohort === null) {
      return 'COHORT NOT FOUND'
    } else {
      for (let i = 0; i < theCohort.students.length; i++) {
        if (theCohort.students[i].firstName === student) {
          theCohort.students.splice(i, 1)
          return theCohort
        }
      }
    }
  }

  findCohortsWithStudents() {
    const cohortsWithStudents = []
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].students.length === 0) {
        continue
      }
      if (this.cohortList[i].students.length !== 0) {
        cohortsWithStudents.push(this.cohortList[i])
      }
    }
    return cohortsWithStudents
  }

  searchByID(id) {
    for (let c = 0; c < this.cohortList.length; c++) {
      for (let s = 0; s < this.cohortList[c].students.length; s++) {
        const student = this.cohortList[c].students[s]
        if (student.id === id) {
          return student
        }
      }
    }
    return 'NO STUDENT FOUND'
  }
}

module.exports = CohortManager
