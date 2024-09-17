class Cohortmanager {
  constructor() {
    this.cohorts = []
  }

  create(cohortName) {
    const cohort = {
      name: cohortName
    }
    this.cohorts.push(cohort)
    return cohort
  }

  search(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  removeBy(name) {
    const cohort = this.search(name)
    if (cohort) {
      const index = this.cohorts.indexOf(cohort)
      return this.cohorts.splice(index, 1)[0]
    } else {
      throw new Error('Cohort not found!') // Cohort not found
    }
  }

  addStudent(cohortName, student) {
    const cohort = this.search(cohortName)

    if (cohort) {
      cohort.students = cohort.students || []

      cohort.students.push(student)

      return student
    } else {
      throw new Error('Cohort not found!')
    }
  }
}

export default Cohortmanager
