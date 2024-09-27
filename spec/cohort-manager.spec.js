import { CohortManager } from '../src/cohort-manager.js'
import { Cohort } from '../src/cohort.js'

describe('Manager', () => {
  let manager
  beforeEach(() => {
    manager = new CohortManager()
  })
  it('updates the list property', () => {
    const cohort = new Cohort('purple', manager)
    const result = manager.setList(cohort)
    expect(result[0].id).toEqual(undefined)
    expect(result[0].cohortName).toEqual('purple')
    expect(result[0].students).toEqual([])
  })
  it('finds a cohort by name', () => {
    const cohort1 = new Cohort('purple', manager)
    const cohort2 = new Cohort('blue', manager)
    manager.setList(cohort1)
    manager.setList(cohort2)
    const result = manager.searchBy('blue')
    expect(result.cohortName).toEqual('blue')
  })
  it('removes a cohort', () => {
    const cohort = new Cohort('purple', manager)
    manager.handleNewItem(cohort)
    const result = manager.removeCohort('purple')
    expect(result).toEqual([])
  })
  it('throws an error if attempting to remove a cohort using an inexistent cohort name ', () => {
    const callback = () => manager.removeCohort('purple')
    expect(callback).toThrowError('cohort name not found')
  })
  it('checks that a cohort name is new', () => {
    const cohort1 = new Cohort('name', manager)
    manager.setList(cohort1)
    const result = manager.isNameNew('new name')
    expect(result).toBeTrue()
  })
  it('checks that a cohort name is not new', () => {
    const cohort1 = new Cohort('name', manager)
    const cohort2 = new Cohort('new name', manager)
    manager.setList(cohort1)
    manager.setList(cohort2)
    const result = manager.isNameNew('new name')
    expect(result).toBeFalse()
  })
})
