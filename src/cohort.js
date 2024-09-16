class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    const newCohort = { name: cohortName, students: [], capacity: 24 }
    const findCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )

    if (findCohort) {
      throw new Error('This Cohort already exists, please choose another name!')
    }
    if (!cohortName) {
      throw new Error('Please give a name to your class!')
    } else {
      this.cohortList.push(newCohort)
    }

    return this.cohortList
  }

  searchCohort(cohortName) {
    const findCohort = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )

    if (!findCohort) {
      throw new Error('Cohort not found')
    }

    return findCohort
  }

  searchStudent(cohortName, studentID) {
    const findCohort = this.searchCohort(cohortName)
    const findStudent = findCohort.students.find(
      (student) => student.studentID === studentID
    )

    if (!findStudent) throw new Error('Student not found')

    return findStudent
  }

  addStudent(cohortName, studentToAdd) {
    const findCohort = this.searchCohort(cohortName)
    const studentExists = findCohort.students.find(
      (student) => student.studentID === studentToAdd.studentID
    )

    if (studentExists) {
      throw new Error('this student already exists, add another student!')
    }

    for (let i = 0; i < this.cohortList.length; i++) {
      for (let j = 0; j < this.cohortList[i].students.length; j++) {
        if (studentToAdd.userName === this.cohortList[i].students[j].userName) {
          throw new Error('This student already enrolled in another Cohort!')
        }
      }
    }

    if (findCohort.students.length > findCohort.capacity) {
      throw new Error('Cohort is full, student cannot be added!')
    }

    findCohort.students.push(studentToAdd)

    return findCohort.students
  }

  removeCohort(cohortName) {
    const findCohort = this.searchCohort(cohortName)
    const findIndex = this.cohortList.indexOf(findCohort)

    this.cohortList.splice(findIndex, 1)

    return this.cohortList
  }

  removeStudent(cohortName, studentID) {
    const findCohort = this.searchCohort(cohortName)
    const findStudent = findCohort.students.find(
      (student) => student.studentID === studentID
    )

    const findStudentIndex = findCohort.students.indexOf(findStudent)
    findCohort.students.splice(findStudentIndex, 1)

    return findCohort.students
  }
}

export default Cohort
