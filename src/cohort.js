export default class Cohort {
  constructor(name, capacity = 24) {
    if (typeof name !== 'string') {
      throw new Error('name input must be String')
    }

    if (name.length < 1) {
      throw new Error('name input must not be blank')
    }

    if (typeof capacity !== 'number') {
      throw new Error('capacity input must be Number')
    }

    this.name = name
    this.capacity = capacity
    this.id = Cohort.nextId()
  }

  get details() {
    return {
      cohortId: this.id,
      name: this.name,
      capacity: this.capacity
    }
  }

  setCapacity(newCapacity) {
    if (typeof newCapacity !== 'number') {
      throw new Error('capacity input must be Number')
    }

    this.capacity = newCapacity
  }

  static nextId() {
    if (!this.lastId) this.lastId = 0
    return ++this.lastId
  }

  static resetId() {
    this.lastId = 0
  }
}
