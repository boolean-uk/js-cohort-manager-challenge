import CohortManager from '../src/cohortManager.js'
import Student from '../src/student.js'

describe('CohortManager', () => {
  let cohort

  beforeEach(() => {
    cohort = new CohortManager()
  })
  it('should create a cohort with a given name', () => {
    const cohortName = 'cohort-1'

    const result = cohort.createCohort(cohortName)

    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })

  it('should throw an error if cohort name is not unique', () => {
    const cohortName = 'cohort-11'

    cohort.createCohort(cohortName)
    expect(() => {
      cohort.createCohort(cohortName)
    }).toThrowError('Cohort name already exists')
  })
  it('should find a cohort with a given name', () => {
    const cohortName = 'cohort-1'

    cohort.createCohort(cohortName)
    const result = cohort.findCohort(cohortName)
    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })

  it('should throw an error if cohort does not exist', () => {
    const cohortName = 'cohort-11'
    cohort.createCohort(cohortName)

    const result = 'cohort-34'
    expect(() => {
      cohort.findCohort(result)
    }).toThrowError('Cohort does not exist')
  })

  it(`should remove a cohort with a given name`, () => {
    const cohortName = 'cohort-1'
    cohort.createCohort(cohortName)
    cohort.removeCohortByName(cohortName)
    expect(cohort.name).toBeUndefined()
  })

  it('should add a student to a cohort', () => {
    const cohortName = 'cohort-1'
    cohort.createCohort(cohortName)
    const student = new Student(
      1,
      'Pierluigi',
      'Capirci',
      'PCapid3v',
      'pierluigi.capirci@gmail.com'
    )
    cohort.addStudentToCohort(cohortName, student)
    expect(cohort.findCohort(cohortName).students.length).toBe(1)
    expect(cohort.findCohort(cohortName).students[0].firstName).toBe(
      'Pierluigi'
    )
  })
  it(`should return the students in a cohort with a given id`, () => {
    const cohortName = 'cohort-1'
    cohort.createCohort(cohortName)
    const student = new Student(
      1,
      'Pierluigi',
      'Capirci',
      'PCapid3v',
      'pierluigi.capirci@gmail.com'
    )
    cohort.addStudentToCohort(cohortName, student)
    const result = cohort.findStudentById(cohortName, 1)
    expect(result.id).toBe(student.id)
  })
  it('should throw an error if student does not exist', () => {
    const cohortName = 'cohort-1'
    cohort.createCohort(cohortName)
    const student = new Student(
      1,
      'Pierluigi',
      'Capirci',
      'PCapid3v',
      'pierluigi.capirci@gmail.com'
    )
    cohort.addStudentToCohort(cohortName, student.id)
    expect(() => {
      cohort.findStudentById(cohortName, 0)
    }).toThrowError('Student does not exist')
  })
})
