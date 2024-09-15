let id = 1

function setId(newId) {
  id = newId
}

class Student {
  constructor(firstName, lastName, githubUsername, email) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
    setId(id + 1)
  }
}

export { Student, setId }
