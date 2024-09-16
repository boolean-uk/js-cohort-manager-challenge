import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort()
  })

  describe('creating a new cohort', () => {
    it('valid cohort name is entered and cohort is added', () => {
      const expected = [{ name: 'Cohort 1', students: [] }]
      cohort.createCohort('Cohort 1')

      const result = cohort.cohortList

      expect(result).toEqual(expected)
    })

    it('invalid cohort name is entered throw error', () => {
      expect(() => cohort.createCohort()).toThrowError(
        'cohort name must be a valid string'
      )
    })
  })

  describe('find cohort by cohort name', () => {
    it('return cohort as an object', () => {
      const expected = { name: 'Cohort 1', students: [] }

      cohort.createCohort('Cohort 1')

      const result = cohort.findCohort('Cohort 1')

      expect(result).toEqual(expected)
    })

    it('Invalid anme in entered ,throw error', () => {
      expect(() => cohort.findCohort()).toThrowError(`Cohort doesn't exist`)
    })
  })

  it('should add a student to cohort', () => {
    cohort.createCohort('Cohort 1')

    const student = new Student(
      1,
      'aayush',
      'lama',
      'viking',
      'aayushlama@rocket.com'
    )
    cohort.addStudentToCohort('Cohort 1', student)
    expect(cohort.findCohort('Cohort 1').students.length).toEqual(1)
    expect(cohort.findCohort('Cohort 1').students[0].firstName).toEqual(
      'aayush'
    )
  })

  describe('find studnet by id', () => {
    it('should return student with given id', () => {
      cohort.createCohort('Cohort 1')

      const student = new Student(
        1,
        'aayush',
        'lama',
        'viking',
        'aayushlama@rocket.com'
      )

      cohort.addStudentToCohort('Cohort 1', student)

      const result = cohort.findStudentById('Cohort 1', 1)

      expect(result.id).toBe(student.id)
    })

    it('should throw error if student does not exist', () => {
      cohort.createCohort('Cohort 1')

      const student = new Student(
        1,
        'aayush',
        'lama',
        'viking',
        'aayushlama@rocket.com'
      )
      cohort.addStudentToCohort('Cohort 1', student.id)

      expect(() => cohort.findStudentById('Cohort 1', 0)).toThrowError(
        `Student doesn't exist`
      )
    })
  })

  it('should remove a cohort with a provided name ', () => {
    cohort.createCohort('Cohort 1')
    cohort.removeCohort('Cohort 1')

    expect(cohort.name).toBeUndefined()
  })
})
