import Cohort from "../.././src/CohortManager.js"
import Student from "../../src/Student.js"


describe('Cohort Manager', () => {
    let cohortManager
  
    beforeEach(() => {
      cohortManager = new Cohort()
    })
  
    it('Create a cohort with a cohort name', () => {
        const cohort = new Cohort('Cohort 11')
        cohortManager.addCohort(cohort)
        expect(cohortManager.cohortList.includes(cohort)).toBe(true)
      })
   
  
    it('Search for a cohort by cohort name', () => {
      const cohort = new Cohort('Cohort 11')
      cohortManager.addCohort(cohort)
      const found = cohortManager.findCohortByName('Cohort 11')
      expect(found).toEqual(cohort)
    })

    it('Add student to a specific cohort', () => {
        const cohort = new Cohort('Cohort 11')
        const student1 = new Student(
          'John',
          'Smith',
          'Johngit',
          'john2@gmail.com',
          '001'
        )
        cohort.addStudent(student1)
        expect(cohort.students.includes(student1)).toBe(true)
      })

      it('Remove a cohort by cohort name', () => {
        const cohort1 = new Cohort('Cohort 11')
        cohortManager.addCohort(cohort1)
        cohortManager.removeCohortByName('Cohort 11')
        expect(cohortManager.cohortList.includes(cohort1)).toBe(false)
      })

      it('Remove a student from a specific cohort', () => {
        const cohort = new Cohort('Cohort 11')
        const student1 = new Student(
          'John',
          'Smith',
          'Johngit',
          'john2@gmail.com',
          '001'
        )
        cohort.addStudent(student1)
        cohort.removeStudentByName('John')
        expect(cohort.students.includes(student1)).toBe(false)
      })

      it('Throw an error when trying to remove a non-existent student', () => {
        const cohort = new Cohort('Cohort 11')
        expect(() => {
          cohort.removeStudentByName('NonExistentStudent')
        }).toThrowError('Student does not exist')
      })
    
      it('Throw an error when trying to find a non-existent cohort', () => {
        expect(() => {
          cohortManager.findCohortByName('NonExistentCohort')
        }).toThrowError('Cohort does not exist')
      })
    
      it('Throw an error when trying to remove a non-existent cohort by name', () => {
        expect(() => {
          cohortManager.removeCohortByName('NonExistentCohort')
        }).toThrowError('Cohort does not exist')
    })

})