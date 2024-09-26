import Cohort from '../src/cohort.js'
import Student from '../src/student.js'
import Manager from '../src/Manager.js'

describe(' cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new Manager()
  })
  it('To add a cohort by name', () => {
    const cohort = new Cohort('Cohort 1')
    cohortManager.addTheCohort(cohort)
    expect(cohortManager.cohorts.includes(cohort)).toBe(true)
  })

  it('To find a cohort by name', () => {
    const cohort = new Cohort('Cohort 1')
    cohortManager.addTheCohort(cohort)
    const foundCohort = cohortManager.getCohortByName('Cohort 1')
    expect(foundCohort).toBe(cohort)
  })

  it('To throw an error when trying to find a non-existent cohort', () => {
    expect(() => {
      cohortManager.getCohortByName('NonExistentCohort')
    }).toThrowError('This cohort does not exist')
  })

  it('To remove a cohort by name', () => {
    const cohortOne = new Cohort('Cohort 1')
    const cohortTwo = new Cohort('Cohort 2')
    cohortManager.addTheCohort(cohortOne)
    cohortManager.addTheCohort(cohortTwo)
    cohortManager.deleteCohortByName('Cohort 1')
    expect(cohortManager.cohorts.includes(cohortOne)).toBe(true)
    expect(cohortManager.cohorts.includes(cohortTwo)).toBe(true)
  })

  it('To throw an error when trying to remove a non-existent cohort', () => {
    expect(() => {
      cohortManager.deleteCohortByName('NonExistentCohort')
    }).toThrowError('This cohort does not exist')
  })

  it('To add a student to a cohort', () => {
    const cohort = new Cohort('Cohort 1')
    const student = new Student(
      'Akindele',
      'Ayorinde',
      'Hayor4real',
      'Akindeleayorinde55@gmail.com',
      '06'
    )
    cohort.addStudentToCohort(student)
    expect(cohort.students.includes(student)).toBe(true)
  })

  it('To remove a student from a specific cohort', () => {
    const cohort = new Cohort('Cohort 6')
    const studentOne = new Student(
      'Akindele',
      'Ayorinde',
      'Hayor4real',
      'Akindeleayorinde55@gmail.com',
      '006'
    )
    cohort.addStudentToCohort(studentOne)
    cohort.deleteStudentById('006')
    expect(cohort.students.includes(studentOne)).toBe(false)
  })

  it('should throw an error when trying to remove a non-existent student', () => {
    const cohort = new Cohort('Some Cohort')
    expect(() => {
      cohort.deleteStudentById('NonExistentStudent')
    }).toThrowError('This student does not exist')
  })
})
