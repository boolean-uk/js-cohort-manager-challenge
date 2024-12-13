/* eslint-disable no-throw-literal */
class CohortList {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  addCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (!found) {
      if (cohortName) {
        const newCohort = new Cohort(cohortName)
        this.cohorts.push(newCohort)

        return newCohort
      }

      if (!cohortName) {
        throw 'cohort must have a valid name'
      }
    }

    if (found) {
      throw 'cohort already exists, cohort must have an unique name'
    }
  }

  searchCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (!found) {
      throw 'cohort not found'
    }

    return found
  }

  removeCohort(cohortName) {
    const found = this.searchCohort(cohortName)

    const foundIndex = this.cohorts.indexOf(found)

    if (foundIndex >= 0 && found) {
      this.cohorts.splice(foundIndex, 1)
    }

    return found
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    const found = this.searchCohort(cohortName)

    for (let i = 0; i < this.cohorts.length; i++) {
      const foundStudent = this.cohorts[i].students.find(
        (student) =>
          student.firstName === firstName &&
          student.lastName === lastName &&
          student.githubUsername === githubUsername &&
          student.email === email &&
          student.studentID
      )

      if (foundStudent) {
        throw 'student already exists in another cohort'
      }

      if (found && found.students.length < 24) {
        const newStudent = new Student(
          firstName,
          lastName,
          githubUsername,
          email,
          this.id
        )

        this.id++

        if (found) {
          found.students.push(newStudent)
        }

        return newStudent
      }
    }
  }

  removeStudent(cohortName, studentID) {
    const foundCohort = this.searchCohort(cohortName)

    if (foundCohort) {
      const foundStudent = foundCohort.students.find(
        (student) => student.studentID === studentID
      )

      const foundStudentIndex = foundCohort.students.findIndex(
        (student) => student.studentID === studentID
      )

      if (foundStudentIndex >= 0 && foundStudent) {
        foundCohort.students.splice(foundStudentIndex, 1)
      }

      if (!foundStudent) {
        throw 'student not found'
      }

      return foundStudent
    }

    if (!foundCohort) {
      throw 'cohort not found'
    }
  }

  searchStudentByID(studentID) {
    let found = null
    for (let i = 0; i < this.cohorts.length; i++) {
      found = this.cohorts[i].students.find(
        (student) => student.studentID === studentID
      )

      if (found) {
        return found
      }
    }

    if (!found) {
      throw 'student not found'
    }
  }

  searchStudentByName(firstName, lastName) {
    const foundStudents = []
    for (let i = 0; i < this.cohorts.length; i++) {
      const found = this.cohorts[i].students.find(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )

      if (found) {
        foundStudents.push(found)
      }
    }

    if (foundStudents.length === 0) {
      throw 'no student found by that name'
    }

    return foundStudents
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.students = []
  }
}

class Student {
  constructor(firstName, lastName, githubUsername, email, studentID) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export { Cohort, Student }
export default CohortList
