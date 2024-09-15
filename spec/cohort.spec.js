import Cohort from '../src/cohort.js'
import { setId } from '../src/student.js'

describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort()
    setId(1)
  })

  describe('when creating a new cohort', () => {
    it('a valid cohortName is entered and returns true', () => {
      // set up

      // execute
      const result = cohort.createCohort('Cohort 1')

      // verify
      expect(result).toBeTrue()
    })

    it('a valid cohortName is entered and the cohort is added to cohortList', () => {
      // set up
      const expected = [{ name: 'Cohort 1', students: [] }]

      // execute
      cohort.createCohort('Cohort 1')
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('if an invalid cohortName is entered, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.createCohort()).toThrowError(
        'cohort name must be a valid string'
      )
    })
  })

  describe('find cohort by cohort name', () => {
    it('return cohort as object when successful', () => {
      // set up
      const expected = { name: 'Cohort 1', students: [] }

      // execute
      cohort.createCohort('Cohort 1')
      const result = cohort.findCohort('Cohort 1')

      // verify
      expect(result).toEqual(expected)
    })

    it('when invalid name input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.findCohort()).toThrowError('cohort does not exist')
    })
  })

  describe('add student to specific cohort', () => {
    beforeEach(() => {
      cohort.createCohort('Cohort 1')
    })

    it('a student is successfully added and returns true', () => {
      // set up
      cohort.enrolStudent('John', 'Doe', 'johndoe', 'john@doe.com')

      // execute
      const result = cohort.addStudentToCohort('Cohort 1', 1)

      // verify
      expect(result).toBeTrue()
    })

    it('cohortList is updated with new student details', () => {
      // set up
      const student1 = cohort.enrolStudent(
        'John',
        'Doe',
        'johndoe',
        'john@doe.com'
      )

      const expected = [
        {
          name: 'Cohort 1',
          students: [student1]
        }
      ]

      // execute
      cohort.addStudentToCohort('Cohort 1', 1)
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('when invalid student input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.findStudent()).toThrowError('student does not exist')
    })
  })

  describe('when removing a cohort', () => {
    beforeEach(() => {
      cohort.createCohort('Cohort 1')
      cohort.createCohort('Cohort 2')
    })

    it('a valid cohortName is input and returns true', () => {
      // set up

      // execute
      const result = cohort.removeCohort('Cohort 1')

      // verify
      expect(result).toBeTrue()
    })

    it('the cohort is removed from the cohortList', () => {
      // set up
      const expected = [{ name: 'Cohort 2', students: [] }]

      // execute
      cohort.removeCohort('Cohort 1')
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('if an invalid cohortName is input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.removeCohort()).toThrowError('cohort does not exist')
    })
  })

  describe('when removing a student from a cohort', () => {
    beforeEach(() => {
      cohort.createCohort('Cohort 1')
      cohort.enrolStudent('John', 'Doe', 'johndoe', 'john@doe.com')
      cohort.addStudentToCohort('Cohort 1', 1)
    })

    it('a valid student ID is input and returns true', () => {
      // set up

      // execute
      const result = cohort.removeStudentFromCohort('Cohort 1', 1)

      // verify
      expect(result).toBeTrue()
    })

    it('the cohortList list is updated with removed student', () => {
      // set up
      const expected = [{ name: 'Cohort 1', students: [] }]

      // execute
      cohort.removeStudentFromCohort('Cohort 1', 1)
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('if an invalid cohortName is input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.removeStudentFromCohort('Cohort 99', 1)).toThrowError(
        'cohort does not exist'
      )
    })

    it('if an invalid studentId is input, throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.removeStudentFromCohort('Cohort 1', 99)).toThrowError(
        'student does not exist'
      )
    })
  })
})
