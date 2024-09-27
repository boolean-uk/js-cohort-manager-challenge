import { Manager } from './manager.js'

class CohortManager extends Manager {
  searchBy(name) {
    return this.list.find((cohort) => cohort.cohortName === name)
  }

  removeCohort(name) {
    const cohortFound = this.searchBy(name)
    if (!cohortFound) {
      throw new Error('cohort name not found')
    }
    const index = this.list.indexOf(cohortFound)
    this.list.splice(index, 1)
    return this.list
  }

  isNameNew(name) {
    return !this.searchBy(name)
  }
}
export { CohortManager }
