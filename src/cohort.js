class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string')
      throw new Error('cohort name must be a valid string')
    const newCohort = { name: cohortName, students: [] }

    this.cohortList.push(newCohort)
  }

  findCohort(cohortName) {
    const cohortToFind = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!cohortToFind) throw new Error(`Cohort doesn't exist`)

    return cohortToFind
  }

  addStudentToCohort(cohortName, student) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!existingCohort) throw new Error(`Cohort doesn't exist`)

    existingCohort.students.push(student)
    return existingCohort
  }

  findStudentById(cohortName, id) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!existingCohort) throw new Error(`Cohort doesn't exist`)

    if (existingCohort.students.find((student) => student.id !== id))
      throw new Error(`Student doesn't exist`)

    return existingCohort.students.find((student) => student.id === id)
  }

  removeCohort(cohortName) {
    this.cohortList = this.cohortList.filter(
      (cohort) => cohort.name !== cohortName
    )
    return true
  }
}

const bb = new Cohort()
bb.createCohort('aayush')
bb.addStudentToCohort('aayush', 'gunda')

console.log(bb.cohortList.students)

export default Cohort
