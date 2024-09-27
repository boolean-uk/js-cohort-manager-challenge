class Cohort {
  constructor(cohortName, cohortManager) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    if (!cohortManager.isNameNew(cohortName)) {
      throw new Error('cannot create cohort - this name is already taken')
    }
    this.cohortName = cohortName
    this.id = undefined
    this.students = []
    this.capacity = 24
    this.occupancy = 0
    this.searchResults = []
  }

  assignCohortNameToStudent(studentId, manager) {
    const foundStudent = manager.searchSchoolById(studentId)
    foundStudent.cohortName = this.cohortName
    return foundStudent
  }

  clearStudentCohortName(studentId, manager) {
    const foundStudent = manager.searchSchoolById(studentId)
    foundStudent.cohortName = undefined
    return foundStudent
  }

  addStudent(studentId, studentManager) {
    if (this.isFull()) {
      throw new Error('cannot add students - this cohort is full')
    }
    const foundStudent = studentManager.searchSchoolById(studentId)
    if (foundStudent.cohortName) {
      throw new Error(
        'this student is already enrolled elsewhere - cannot be added to this cohort'
      )
    }
    this.assignCohortNameToStudent(studentId, studentManager)
    this.students.push(foundStudent)
    this.increaseOccupancyByOne()
    return this.students
  }

  searchCohortById(studentId) {
    const foundStudent = this.students.find(
      (student) => student.id === studentId
    )
    if (!foundStudent) {
      throw new Error('student not found')
    }
    return foundStudent
  }

  removeStudent(studentId, manager) {
    if (this.occupancy === 0) {
      throw new Error('no students to be removed - cohort empty')
    }
    const foundStudent = this.searchCohortById(studentId)
    this.clearStudentCohortName(studentId, manager)
    const index = this.students.indexOf(foundStudent)
    this.students.splice(index, 1)
    this.decreaseOccupancyByOne()

    return this.students
  }

  increaseOccupancyByOne() {
    this.occupancy++
    return this.occupancy
  }

  decreaseOccupancyByOne() {
    this.occupancy--
    return this.occupancy
  }

  isFull() {
    if (this.occupancy > this.capacity) {
      throw new Error(
        'capacity exceeded - there should never be more than 24 students'
      )
    }
    return this.occupancy === this.capacity
  }

  searchByFirstName(firstName, array) {
    this.searchResults = array.filter(
      (student) => student.firstName === firstName
    )
    if (this.searchResults.length === 0) {
      throw new Error('no students found with this first name')
    }
    return this.searchResults
  }

  searchByLastName(lastName, array) {
    this.searchResults = array.filter(
      (student) => student.lastName === lastName
    )
    if (this.searchResults.length === 0) {
      throw new Error('no students found with this last name')
    }
    return this.searchResults
  }

  searchByFirstAndLastName(name) {
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    try {
      this.searchByFirstName(firstName, this.students)
      this.searchByLastName(lastName, this.searchResults)
    } catch {
      throw new Error('no such first and last name combination')
    }
    return this.searchResults
  }
}

export { Cohort }
