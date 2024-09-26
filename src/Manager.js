class Manager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohort) {
    this.cohorts.push(cohort)
  }

  removeCohortByName(name) {
    const originalLength = this.cohorts.length
    this.cohorts = this.cohorts.filter((cohort) => cohort.cohortName !== name)

    if (this.cohorts.length === originalLength) {
      throw new Error('Cohort does not exist')
    }
  }

  findCohortByName(name) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === name
    )
    if (!foundCohort) {
      throw new Error('Cohort does not exist')
    }
    return foundCohort
  }
}

export default Manager
