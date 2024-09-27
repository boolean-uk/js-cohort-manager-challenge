import { Manager } from '../src/manager.js'

const DUMMY_ITEM1 = { id: undefined, name: 'item1' }
const DUMMY_ITEM2 = { id: undefined, name: 'item2' }
const DUMMY_ITEM3 = { id: undefined, name: 'item3' }

describe('Manager', () => {
  let manager
  beforeEach(() => {
    manager = new Manager()
  })
  it('updates the list property', () => {
    const result = manager.setList(DUMMY_ITEM1)
    expect(result[0].name).toEqual('item1')
  })
  it('generates unique id', () => {
    manager.increaseIdCount()
    manager.increaseIdCount()
    manager.increaseIdCount()
    const result = manager.increaseIdCount()
    expect(result).toEqual(4)
  })
  it('assigns a unique id to each item', () => {
    manager.increaseIdCount()
    manager.setList(DUMMY_ITEM1)
    manager.assignId()
    manager.increaseIdCount()
    manager.setList(DUMMY_ITEM2)
    const result = manager.assignId()
    expect(result).toEqual(2)
  })
  it('handles each new student separately and ensure a unique id is allocated to each', () => {
    manager.handleNewItem(DUMMY_ITEM1)
    manager.handleNewItem(DUMMY_ITEM2)
    const result = manager.handleNewItem(DUMMY_ITEM3)
    expect(result[0].id).toEqual(1)
    expect(result[1].id).toEqual(2)
    expect(result[2].id).toEqual(3)
  })
})
