const CohortManager = require('../src/cohortmanager')
const Cohort = require('../src/cohort')
describe('cohortManager', () => {
    let manager
    beforeEach(() => {
        manager = new CohortManager();
    });

    //TEST 1
    it('create a new cohort', () => {
        const expected = [new Cohort('CohortOtter')]
        // SET UP
        manager.createCohort('CohortOtter')
        let create = manager.cohorts
        expect(create).toEqual(expected)

    })

    //TEST 2
    it('create multiple new cohorts', () => {
        const expected = [new Cohort('CohortOtter'),
        new Cohort('CohortPenguin'),
        new Cohort('CohortWolf'),
        new Cohort('CohortDeer'),
        new Cohort('CohortKoala')]
        // SET UP
        manager.createCohort('CohortOtter')
        manager.createCohort('CohortPenguin')
        manager.createCohort('CohortWolf')
        manager.createCohort('CohortDeer')
        manager.createCohort('CohortKoala')
        let create = manager.cohorts
        expect(create).toEqual(expected)
    })

    //TEST 3
    it('search for cohort with cohort name', () => {
        const expected = [new Cohort('CohortPenguin')]
        // SET UP
        manager.createCohort('CohortPenguin')
        let create = manager.searchCohort('CohortPenguin')
        expect(create).toEqual(expected)
    })

    //TEST 4
    it('student by ID', () => {
        const expected = {
            "id": 1,
            "firstname": "Kiran",
            "lastname": "Gurung",
            "github": "KinTale",
            "email": "email1@email.com"
        }
        // SET UP
        let getStudent = manager.getStudentById(1)
        expect(getStudent).toEqual(expected)
    })

    //TEST 5
    it('add student to specific cohort', () => {
        const expected = 'Student successfully added to CohortKoala'
        // SET UP
        manager.createCohort('CohortKoala')
        let addStudent = manager.addStudent('CohortKoala', 1)
        expect(addStudent).toEqual(expected)
    })

    //TEST 6
    it('remove cohort by name', () => {
        const expected = []
        // SET UP
        manager.createCohort('CohortDeer')
        let removeCohort = manager.removeCohort('CohortDeer')
        expect(removeCohort).toEqual(expected)
    })

    //TEST 7
    it('remove student from specific cohort', () => {
        const expected = [({
            id: 1, firstname: 'Kiran',
            lastname: 'Gurung',
            github: 'KinTale',
            email: 'email1@email.com'
        })]

        // SET UP
        manager.createCohort('CohortKoala')
        manager.addStudent('CohortKoala', 1)
        manager.addStudent('CohortKoala', 2)
        let removeStudent = manager.removeStudent('CohortKoala', 2)
        expect(removeStudent).toEqual(expected)
        //console.log('test7', manager.cohorts)
    })

    //TEST 8
    it('return error if cohort doesnt exist', () => {
        const expected = 'ERROR : Cohort not found.'
        // SET UP
        manager.createCohort('CohortDeer')
        let removeCohort = manager.removeCohort('CohortDog')
        expect(removeCohort).toEqual(expected)
    })

    //TEST 9
    it('return error if student doesnt exist', () => {
        const expected = 'Student not found.'
        // SET UP
        manager.createCohort('CohortKoala')
        manager.addStudent('CohortKoala', 1)
        let removeCohort = manager.getStudentById(45)
        expect(removeCohort).toEqual(expected)
    })
})