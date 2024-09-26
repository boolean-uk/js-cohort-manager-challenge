class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
    this.cohortList = []
  }

  addCohort(cohort) {
    this.cohortList.push(cohort)
  }

  findCohortByName(name) {
    const foundCohort = this.cohortList.find(
      (cohort) => cohort.CohortName === name
    )
    if (!foundCohort) {
      throw new Error('Cohort does not exist')
    }
    return foundCohort
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeCohortByName(name) {
    const cohortLength = this.cohortList.length
    this.cohortList = this.cohortList.filter(
      (cohort) => cohort.CohortName !== name
    )

    if (this.cohortList.length === cohortLength) {
      throw new Error('Cohort does not exist')
    }
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
