class Student {
  constructor(firstName, lastName, githubUsername, email) {
    if (!firstName || !lastName || !githubUsername || !email) {
      throw new Error('new student cannot be created - missing input')
    }
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
    this.id = undefined
    this.cohortName = undefined
  }
}

export { Student }
