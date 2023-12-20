import Branch from "./branch.js"

class Organization {
  constructor(name) {
    this.name = name
    this.studentCounter = 0
    this.branches = []
  }

  addBranch(location) {
    if (!location || typeof location !== 'string') {
      throw new Error('invalid input')
    }

    if (!this.branches.find((branch) => branch.location === location)) {
      const newBranch = new Branch(location)
      this.branches.push(newBranch)
    }
    return this.branches
  }

  registerNewStudent() {
    this.studentCounter += 1
    return this.studentCounter
  }
}

const myOrganization = new Organization('Boolean')
console.log(myOrganization)
export { Organization, myOrganization }
