class CohortManager {
  constructor() {
    this.cohorts = [
      {
        name: 'cohort1',
        students: [
          {
            id: 1,
            name: 'Tayo',
            age: 23,
            github: 'tayokanch',
            email: 'tayoyes@gmail.com'
          },
          {
            id: 2,
            name: 'Eazy',
            age: 22,
            github: 'eazyE',
            email: 'eazyBalogun@gmail.com'
          },
          {
            id: 3,
            name: 'Tosin',
            age: 38,
            github: 'TosinGaga',
            email: 'olorundaT@gmail.com'
          }
        ]
      },
      {
        name: 'cohort3',
        students: [
          {
            id: 1,
            name: 'Damilola',
            age: 23,
            github: 'damiJade',
            email: 'jadesola@gmail.com'
          },
          {
            id: 2,
            name: 'Segun',
            age: 56,
            github: 'shegs',
            email: 'seggs@gmail.com'
          },
          {
            id: 3,
            name: 'Ope',
            age: 32,
            github: 'opemipo',
            email: 'opemipo@gmail.com'
          }
        ]
      }
    ]
  }

  create(cohortName) {
    const cohort = {
      name: cohortName,
      students: []
    }

    this.cohorts.push(cohort)
    return cohort
  }

  searchCohort(cohortName) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    return foundCohort
  }

  addStudent(cohortName, studentInfo) {
    const { name, age, github, email } = studentInfo

    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (!cohort) {
      return 'Cohort not found'
    }
    if (cohort.students.length === 3) {
      return `${cohort.name} has reached its maximum capacity`
    } else {
      const newStudentId = cohort.students.length
        ? cohort.students.length + 1
        : 1
      const newStudentObject = {
        id: newStudentId,
        name,
        age,
        github,
        email
      }
      cohort.students.push(newStudentObject)

      return newStudentObject
    }
  }

  removeCohort(cohortName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (!cohort) {
      return 'Cohort not found'
    } else {
      const indexOfCohort = this.cohorts.indexOf(cohort)
      const removedCohort = this.cohorts.splice(indexOfCohort, 1)
      return removedCohort
    }
  }

  removeStudent(cohortName, studentName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)
    if (!cohort) {
      return 'Cohort not found'
    }
    const foundStudent = cohort.students.find(
      (student) => student.name === studentName
    )

    if (!foundStudent) {
      return 'Student not found'
    } else {
      const indexOfStudent = cohort.students.indexOf(foundStudent)

      const removedStudent = cohort.students.splice(indexOfStudent, 1)

      return removedStudent
    }
  }
}

// Create an instance of CohortManager
const cohortManager = new CohortManager()

// Create a new cohort using the create method

cohortManager.create('cohort4')

const cohortName = 'cohort1'
const studentInfo = {
  name: 'Jamie',
  age: '18',
  email: 'jamie737@gmail.com',
  github: 'jamiecode'
}
console.log(cohortManager.addStudent(cohortName, studentInfo))

cohortManager.removeStudent('cohort1', 'Eazy')
module.exports = { CohortManager }
