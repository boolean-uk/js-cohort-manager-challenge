import Student from './student.js'
import students from './studentsDB.js'

class Cohort {
  constructor(name) {
    this.name = name
    this.studentsList = []
  }

  studentExists(firstName, lastName) {
    if (this.studentsList.length > 0) {
      const allreadyIn = this.studentsList.find(
        (std) => std.firstName === firstName && std.lastName === lastName
      )
      if (allreadyIn) {
        console.log(
          `${firstName} ${lastName} is already enrolled in Cohort ${this.name}\n`
        )
        throw new Error(
          `${firstName} ${lastName} is already enrolled in Cohort ${this.name}`
        )
      }
    }
  }

  populateCohort(cohort, num) {
    for (let i = 1; i <= num; i++) {
      const firstName = students[i].firstName
      const lastName = students[i].lastName
      cohort.addStudent(firstName, lastName)
    }
  }

  addStudent(firstName, lastName) {
    const cohortFullMsg = `Cohort ${this.name} is full. No more students can be added. Choose another cohort`
    const student = new Student(firstName, lastName)
    this.studentExists(student.firstName, student.lastName)

    if (this.studentsList.length === 24) {
      console.log(cohortFullMsg)
      throw new Error(cohortFullMsg)
    } else {
      this.studentsList.push(student)
      console.log(
        `${firstName} ${lastName} was succesfully added to Cohort ${this.name}\n`
      )
    }
  }

  removeStudent(firstName, lastName) {
    const studentToRemove = this.studentsList.findIndex(
      (std) => std.firstName === firstName && std.lastName === lastName
    )
    if (studentToRemove !== -1) {
      this.studentsList.splice(studentToRemove, 1)
      console.log(
        `${firstName} ${lastName} was succesfully removed from Cohort ${this.name}\n`
      )
    } else {
      const errorMsg = `There is no student named ${firstName} ${lastName} in Cohort ${this.name}\n`
      console.log(errorMsg)
      throw new Error(errorMsg)
    }
  }

  findStudent(id) {
    const found = this.studentsList.find((std) => std.id === id)
    if (found) {
      console.log(`Here is the student with id ${id} \n`)
      console.log(JSON.stringify(found, null, 2) + '\n')
      return found
    } else {
      const errorMsg = `There is no student with id ${id}`
      console.log(errorMsg)
      throw new Error(errorMsg)
    }
  }
}

export default Cohort
