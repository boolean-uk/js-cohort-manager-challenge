class Manager {
  constructor() {
    this.cohorts = []
  }

  addTheCohort(cohort) {
    this.cohorts.push(cohort)
  }

  deleteCohortByName(name) {
    const targetCohort = this.getCohortByName(name)

    return targetCohort
  }

  getCohortByName(name) {
    const targetCohort = this.cohorts.find(
      (cohort) => cohort.NameOfCohort === name
    )
    if (!targetCohort) {
      throw new Error('This cohort does not exist')
    }
    return targetCohort
  }
}

export default Manager
