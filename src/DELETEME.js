// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE

let studentIdCounter = 1
class Student {
    constructor (firstName, lastName, githubUsername, email) {
        this.studentId = studentIdCounter++
        this.firstName = firstName
        this.lastName = lastName
        this.githubUsername = githubUsername
        this.email = email
    }
}

class Cohort {
    constructor(id, cohortName) {
        this.id = id
        this.cohortName = cohortName
        this.students = []
    }

    addStudent(student) {
        this.students.push(student)
        // console.log(this.students)
        return student
    }

    removeStudent(studentId) {
        const index = this.students.findIndex(student => student.studentId === studentId)

        if (index !== -1) {
            this.students.splice(index, 1)
        }
        else {
            throw ('student does not exist')
        }
    }
}

class CohortManager {
    constructor() {
        this.cohorts = []
        this.id = 1
    }

    createCohort(cohortName) {
        const newCohort = new Cohort(this.id, cohortName)
        this.id++
        this.cohorts.push(newCohort)
        // console.log(this.cohorts)
        return newCohort
    }

    searchCohort(cohortName) {
        const foundCohort = this.cohorts.find(cohort => cohort.cohortName === cohortName)
        if (!foundCohort) {
            throw ('cohort not found')
        }
        return foundCohort
    }

    addStudentsToCohort(cohortName, student) {
        const cohort = this.searchCohort(cohortName)
        cohort.addStudent(student)
        // console.log('hey', student.firstName, student.lastName)
        return student.firstName, student.lastName
    }

    removeCohort(cohortName) {
        const cohortToRemove = this.cohorts.findIndex(c => c.cohortName === cohortName)
        if (cohortToRemove !== -1) {
            this.cohorts.splice(cohortToRemove, 1)
        }
        else {
            throw ('cohort does not exist')
        }
        return `cohort ${cohortName} removed`
    }

    removeStudentFromCohort(cohortName, student) {
        const cohort = this.searchCohort(cohortName)
        cohort.removeStudent(student)
        return 
    }

}

export default CohortManager

export { Cohort }

export { Student }

const student1 = new Student('mama', 'lele', 'homonoviscoding', 'mama@gmail.com')
const student2 = new Student('kyle', 'vann', 'kyle', 'kyle@gmail.com')
const cohortManager = new CohortManager()
const cohort12 = cohortManager.createCohort('cohort 12')


cohortManager.createCohort('cohort 13')
cohortManager.addStudentsToCohort('cohort 12', student1)
cohortManager.addStudentsToCohort('cohort 12', student2)
cohortManager.addStudentsToCohort('cohort 13', student1)
cohortManager.removeStudentFromCohort('cohort 12', 2)
// cohortManager.searchCohort('cohort')


// console.log(cohort12.students)

