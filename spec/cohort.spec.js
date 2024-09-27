import Manager from '../src/manager.js'
import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

describe('Manager', () => {
  let manager

  beforeEach(() => {
    manager = new Manager()
  })

  it('should add a cohort', () => {
    const cohort = new Cohort('Cohort 1')
    manager.addCohort(cohort)
    expect(manager.cohorts.includes(cohort)).toBe(true)
  })

  it('should find a cohort by name', () => {
    const cohort = new Cohort('Cohort 1')
    manager.addCohort(cohort)
    const found = manager.findCohortByName('Cohort 1')
    expect(found).toEqual(cohort)
  })

  it('should remove a cohort by name', () => {
    const cohort1 = new Cohort('Cohort 1')
    const cohort2 = new Cohort('Cohort 2')
    manager.addCohort(cohort1)
    manager.addCohort(cohort2)
    manager.removeCohortByName('Cohort 1')
    expect(manager.cohorts.includes(cohort1)).toBe(false)
    expect(manager.cohorts.includes(cohort2)).toBe(true)
  })

  it('should add a student to a cohort', () => {
    const cohort = new Cohort('Cohort 1')
    const student1 = new Student(
      'Alice',
      'Johnson',
      'alicegit',
      'alice@email.com',
      '001'
    )
    cohort.addStudent(student1)
    expect(cohort.students.includes(student1)).toBe(true)
  })

  it('should remove a student from a specific cohort', () => {
    const cohort = new Cohort('Cohort 1')
    const student1 = new Student(
      'Alice',
      'Johnson',
      'alicegit',
      'alice@email.com',
      '001'
    )
    cohort.addStudent(student1)
    cohort.removeStudentByName('Alice')
    expect(cohort.students.includes(student1)).toBe(false)
  })

  it('should throw an error when trying to remove a non-existent student', () => {
    const cohort = new Cohort('Cohort 1')
    expect(() => {
      cohort.removeStudentByName('NonExistentStudent')
    }).toThrowError('Student does not exist')
  })

  it('should throw an error when trying to find a non-existent cohort', () => {
    expect(() => {
      manager.findCohortByName('NonExistentCohort')
    }).toThrowError('Cohort does not exist')
  })

  it('should throw an error when trying to remove a non-existent cohort by name', () => {
    expect(() => {
      manager.removeCohortByName('NonExistentCohort')
    }).toThrowError('Cohort does not exist')
  })
})
