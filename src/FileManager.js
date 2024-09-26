class FileManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohort) {
    this.cohorts.push(cohort)
  }

  removeCohortByName(name) {
    const isCohortPresent = this.cohorts.some(
      (cohort) => cohort.CohortName === name
    )
    if (!isCohortPresent) {
      throw new Error('This cohort does not exist')
    }
    this.cohorts = this.cohorts.filter((cohort) => cohort.CohortName !== name)
  }

  findCohortByName(name) {
    const locatedCohort = this.cohorts.find(
      (cohort) => cohort.CohortName === name
    )
    if (!locatedCohort) {
      throw new Error('This cohort does not exist')
    }
    return locatedCohort
  }
}

export default FileManager
