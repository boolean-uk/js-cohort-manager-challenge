import Student from './student.js'
class Cohort {
  constructor(id, cohortName) {
    this.id = id
    this.cohortName = cohortName
    this.students = [] // Ensure 'students' is initialized as an empty array
  }

  addStudent(studentID, firstName, lastName, githubUsername, email) {
    const student = new Student(
      studentID,
      firstName,
      lastName,
      githubUsername,
      email
    )
    this.students.push(student)
    return student
  }

  searchByName(Name) {
    const studentSearched = this.students.find(
      (student) => student.firstName === Name
    )
    return studentSearched
  }

  throwNotFoundError(message) {
    throw new Error(message)
  }

  removeStudent(Name) {
    const foundIndex = this.students.findIndex(
      (student) => student.firstName === Name
    )
    if (foundIndex >= 0) {
      this.students.splice(foundIndex, 1)
    } else {
      this.throwNotFoundError('Student not found')
    }
  }

  /*  removeStudent(studentID) {
    const index = this.students.findIndex(student => student.studentID === studentID);
    if (index !== -1) {
      this.students.splice(index, 1);
    } else {
      throwNotFoundError('Student not found');
    }
  } */

  getList() {
    return this.students
  }
}

export default Cohort
