import Cohort from "../src/cohort.js"
import Manager from "../src/manager.js"

describe('manager', () => {
    let manager

    beforeEach(() => {
        manager = new Manager
    })
    
    describe('creating a cohort', () => {
        it('by name', () => {
            const expected = [{ name: 'Cohort1', students: [] }]

            manager.createCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by invalid name', () => {
            const expected = []

            manager.createCohort(1337)

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by 2 of the same name', () => {
            const expected = [{ name: 'Cohort1', students: [] }]

            manager.createCohort('Cohort1')
            manager.createCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })
    })

    describe('removing a cohort', () => {
        it('by name', () => {
            const expected = []

            manager.createCohort('Cohort1')
            manager.removeCohort('Cohort1')

            const result = manager.cohorts

            expect(result).toEqual(expected)
        })

        it('by invalid name', () => {
            const expected = 'ERROR: cohortName is not a string'

            manager.createCohort('Cohort1')

            const result = manager.removeCohort(1337) 

            expect(result).toEqual(expected)
        })

        it('that does not exist', () => {
            const expected = "ERROR: cohort doesn't exist by that name"

            const result = manager.removeCohort('Cohort1')

            expect(result).toEqual(expected)
        })
    })

    describe('searching for a cohort', () => {
        it('by name', () => {
            const expected = { name: 'Cohort2', students: [] }

            manager.createCohort('Cohort1')
            manager.createCohort('Cohort2')
            manager.createCohort('Cohort3')

            const result = manager.searchByCohortName('Cohort2')

            expect(result).toEqual(expected)
        })

        it('that does not exist', () => {
            const expected = 'ERROR: Cohort not found'

            const result = manager.searchByCohortName('Cohort1')
            
            expect(result).toEqual(expected)
        })
    })
})

describe('cohort', () => {
    let cohort

    beforeEach(() => {
        cohort = new Cohort
    })

    describe('adding students', () => {
        it('adding a student', () => {
            const expected = [{ firstName: 'Ryan', lastName: 'Tinsley', gitUsername: 'Radio58', email: 'rt58gm@gmail.com'}]
    
            cohort.addStudent('Ryan', 'Tinsley', 'Radio58', 'rt58gm@gmail.com')
    
            const result = cohort.students
                
            expect(result).toEqual(expected)
        })
        it('by 2 of the same name', () => {
            const expected = [{ firstName: 'Ryan', lastName: 'Tinsley', gitUsername: 'Radio58', email: 'rt58gm@gmail.com'}]
    
            cohort.addStudent('Ryan', 'Tinsley', 'Radio58', 'rt58gm@gmail.com')
            cohort.addStudent('Ryan', 'Tinsley', 'Radio58', 'rt58gm@gmail.com')
    
            const result = cohort.students
                
            expect(result).toEqual(expected)
        })
    })

    describe('removing students', () => {
        it('removing a student', () => {
            const expected = []
    
            cohort.addStudent('Ryan', 'Tinsley', 'Radio58', 'rt58gm@gmail.com')
            cohort.removeStudent('Radio58')
            const result = cohort.students
                
            expect(result).toEqual(expected)
        })
        it('removing a student that does not exist', () => {
            const expected = 'ERROR: Student is not in this cohort'
    
            const result = cohort.removeStudent('Radio58')
                
            expect(result).toEqual(expected)
        })
    })
    
})

