/* eslint-disable no-unused-vars */
import Cohortmanager from '../../src/Cohortmanager.js'
describe('Cohortmanager', () => {
  // eslint-disable-next-line no-unused-vars
  let cohortmanager
  beforeEach(() => {
    cohortmanager = new Cohortmanager()
  })
  describe('creates, search,removes and Throw errors if student or cohort not found by cohort name', () => {
    it('creates a cohort by cohort name and returns expected', () => {
      const expected = {
        name: 'cohort 11'
      }

      const result = cohortmanager.create('cohort 11')
      expect(result).toEqual(expected)
    })

    it('searches for a cohort by name and returns the cohort', () => {
      const cohortName = 'cohort 12'

      cohortmanager.create(cohortName)

      const result = cohortmanager.search(cohortName)
      expect(result).toEqual({ name: cohortName })
    })
    it('removes a cohort by name and returns the cohort', () => {
      const cohortName = 'cohort 13'
      cohortmanager.create(cohortName)
      const result = cohortmanager.removeBy(cohortName)
      expect(result).toEqual({ name: cohortName })
    })
    it('Throw errors if student or cohort not found', () => {
      const cohortName = 'cohort 14'
      cohortmanager.create(cohortName)
      const result = cohortmanager.search(cohortName)
      expect(result).toEqual({ name: cohortName })
    })
  })
  describe('Adds student to a specific cohort and Remove student from a specific cohort', () => {
    it('adds student to a specific cohort', () => {
      const student = {
        id: 1,
        firstName: 'Tinubu',
        lastName: 'Buhari',
        githubUsername: 'tinubu2019',
        email: 'tinububuhari@yahoo.com'
      }
      const cohortName = 'cohort11'
      cohortmanager.create(cohortName)
      const result = cohortmanager.addStudent(cohortName, student)
      expect(result).toEqual(student)
    })
  })
})
