import CohortsManager, { Cohort, Student } from '../src/cohort.js'

describe('CohortManager', () => {
  let cohortsManager

  beforeEach(() => {
    cohortsManager = new CohortsManager()
  })

  it('should exist', () => {
    expect(cohortsManager).toBeInstanceOf(CohortsManager)
  })

  it('should create a new cohort', () => {
    cohortsManager.createCohort('boolean-12')

    expect(cohortsManager.cohorts.length).toBe(1)
    expect(cohortsManager.cohorts[0].name).toBe('boolean-12')
  })

  it('should search for a cohort by cohort name', () => {
    cohortsManager.createCohort('boolean-11')
    cohortsManager.createCohort('boolean-12')

    const result = cohortsManager.findCohort('boolean-12')

    expect(result.name).toBe('boolean-12')
  })

  it('should throw an error if the cohort to remove is not found', () => {
    expect(() => cohortsManager.findCohort('boolean-13')).toThrow(
      new Error('The boolean-13 cohort is not found!')
    )
  })

  it('should add student to a specific cohort', () => {
    cohortsManager.createCohort('boolean-12')

    const student1 = new Student(
      'Hamada',
      'Abdelaal',
      'hamada-ab',
      'hamada@boolean.uk'
    )

    cohortsManager.addStudent('boolean-12', student1)

    expect(cohortsManager.cohorts[0].name).toBe('boolean-12')
    expect(cohortsManager.cohorts[0].students.length).toBe(1)
    expect(cohortsManager.cohorts[0].students[0].firstName).toBe('Hamada')
  })
  // ----
})
