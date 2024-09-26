import Manager from '../src/FileManager.js'
import Cohort from '../src/Cohort.js'
import Student from '../src/Student.js'

describe('Manager', () => {
  let manager

  beforeEach(() => {
    manager = new Manager()
  })

  it('To add a cohort by name', () => {
    const cohort = new Cohort('Cohort 1')
    manager.addCohort(cohort)
    expect(manager.cohorts.includes(cohort)).toBe(true)
  })

  it('To find a cohort by name', () => {
    const cohort = new Cohort('Cohort 1')
    manager.addCohort(cohort)
    const found = manager.findCohortByName('Cohort 1')
    expect(found).toBe(cohort)
  })

  it('To throw an error when trying to find a non-existent cohort', () => {
    expect(() => {
      manager.findCohortByName('NonExistentCohort')
    }).toThrowError('This cohort does not exist')
  })

  it('To remove a cohort by name', () => {
    const cohort1 = new Cohort('Cohort 1')
    const cohort2 = new Cohort('Cohort 2')
    manager.addCohort(cohort1)
    manager.addCohort(cohort2)
    manager.removeCohortByName('Cohort 1')
    expect(manager.cohorts.includes(cohort1)).toBe(false)
    expect(manager.cohorts.includes(cohort2)).toBe(true)
  })

  it('To throw an error when trying to remove a non-existent cohort', () => {
    expect(() => {
      manager.removeCohortByName('NonExistentCohort')
    }).toThrowError('This cohort does not exist')
  })

  it('To add a student to a cohort', () => {
    const cohort = new Cohort('Cohort 1')
    const student = new Student(
      'Digby',
      'Postman',
      'Digbygit',
      'Iimpregnate@gmail.com',
      '01'
    )
    cohort.addStudent(student)
    expect(cohort.students.includes(student)).toBe(true)
  })

  it('To remove a student from a specific cohort', () => {
    const cohort = new Cohort('Cohort 1')
    const student1 = new Student(
      'Digby',
      'Postman',
      'digbygit',
      'digbygit@gmail.com',
      '001'
    )
    cohort.addStudent(student1)
    cohort.removeStudentById('001')
    expect(cohort.students.includes(student1)).toBe(false)
  })

  it('should throw an error when trying to remove a non-existent student', () => {
    const cohort = new Cohort('Some Cohort')
    expect(() => {
      cohort.removeStudentById('NonExistentStudent')
    }).toThrowError('This student does not exist')
  })
})
