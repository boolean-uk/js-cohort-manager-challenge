class Manager {
  constructor() {
    this.list = []
    this.idCounter = 0
  }

  assignId() {
    this.list[this.list.length - 1].id = this.idCounter
    return this.list[this.list.length - 1].id
  }

  increaseIdCount() {
    this.idCounter += 1
    return this.idCounter
  }

  setList(item) {
    this.list.push(item)
    return this.list
  }

  handleNewItem(item) {
    this.setList(item)
    this.increaseIdCount()
    this.assignId()
    return this.list
  }
}

export { Manager }
