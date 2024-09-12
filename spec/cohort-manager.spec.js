import { CohortManager } from '../src/cohort-manager.js'

describe('Cohort Manger', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('/ createCohort', () => {
    it('/ creates a new cohort', () => {
      cohortManager.createCohort('Cohort 1')
      const result = cohortManager.cohortList[0].name
      expect(result).toEqual('Cohort 1')
    })

    it('/ no parameter inputed', () => {
      const expected = 'Cohort needs a name!'
      expect(() => cohortManager.createCohort('')).toThrowError(expected)
    })
  })

  describe('/ removeCohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('KeepMe')
      cohortManager.createCohort('RemoveMe')
    })

    it('/ removes a cohort', () => {
      const expectation = 1
      cohortManager.removeCohort('RemoveMe')
      expect(cohortManager.cohortList.length).toEqual(expectation)
    })

    it('/ no parameter inputed', () => {
      const expected = 'Please enter a cohort name'
      expect(() => cohortManager.removeCohort('').toThrowError(expected))
    })

    it('/ no cohort was found', () => {
      const expected = 'No cohort found with that name'
      expect(() => cohortManager.removeCohort('ImNotHere')).toThrowError(
        expected
      )
    })
  })

  describe('find cohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('findMe')
    })

    it('/ if found cohort', () => {
      const expected = cohortManager.cohortList[0]
      const result = cohortManager.findCohort('findMe')
      expect(result).toEqual(expected)
    })

    it('/ if no name was found', () => {
      const expected = 'No cohort found with that name'
      expect(() => cohortManager.findCohort('dontFindMe')).toThrowError(
        expected
      )
    })
  })

  describe('/ createStudent', () => {
    beforeEach(() => {
      cohortManager.allStudents = []
    })

    it('/ properly creates and adds a student to allStudent list', () => {
      const expectation = 'Steve'
      cohortManager.createStudent(
        'Steve',
        'Stevenson',
        '/Stevyboy',
        'steve@hotmail.com'
      )
      expect(cohortManager.allStudents[0].firstName).toEqual(expectation)
    })
    it('/ only a name was added', () => {
      const expectationOne = 'Steve'
      const expecationTwo = ''
      cohortManager.createStudent('Steve')

      expect(cohortManager.allStudents[0].firstName).toEqual(expectationOne)
      expect(cohortManager.allStudents[0].lastName).toEqual(expecationTwo)
    })
    it('/ if no name is added', () => {
      const expectation = 'please enter a name to add student'
      const action = () =>
        cohortManager.createStudent(
          '',
          'Stevenson',
          '/Stevyboy',
          'steve@hotmail.com'
        )
      expect(action).toThrowError(expectation)
    })
  })
  describe('/ findStudent', () => {
    beforeEach(() => {
      cohortManager.studentIdCount = 1
      cohortManager.createStudent('Alex')
      cohortManager.createStudent('Jimmy')
      cohortManager.createStudent('Molly')
    })

    it('/ a valid student ID is inputted', () => {
      const expectation = 'Jimmy'
      const result = cohortManager.findStudent(2)

      expect(result.firstName).toEqual(expectation)
    })

    it('/ if no paramter is inputted', () => {
      const expectation = 'please enter a student ID'
      const action = () => cohortManager.findStudent()

      expect(action).toThrowError(expectation)
    })

    it('/ no student found', () => {
      const expectation = 'student not found'
      const action = () => cohortManager.findStudent(6)

      expect(action).toThrowError(expectation)
    })
  })
  describe('/ addStudentToCohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('Cohort 1')
      cohortManager.createCohort('Cohort 2')
      cohortManager.studentIdCount = 1
      cohortManager.createStudent('Alex')
      cohortManager.createStudent('Jimmy')
      cohortManager.createStudent('Molly')
      cohortManager.createStudent('Jane')
    })

    it('/ adds to a specific cohort', () => {
      const expectationOne = 'Alex'
      const expectationTwo = 'Molly'

      cohortManager.addStudentToCohort(1, 'Cohort 1')
      cohortManager.addStudentToCohort(3, 'Cohort 2')

      const resultOne = cohortManager.findCohort('Cohort 1')
      const resultTwo = cohortManager.findCohort('Cohort 2')

      expect(resultOne.studentList[0].firstName).toEqual(expectationOne)
      expect(resultTwo.studentList[0].firstName).toEqual(expectationTwo)
    })

    it('/ if one parameter is not inputted', () => {
      const expectation = 'please enter both student and cohort'
      const action = () => cohortManager.addStudentToCohort('', 'Cohort 1')

      expect(action).toThrowError(expectation)
    })

    it('/ if student is not correct', () => {
      const expectation = 'student not found'
      const action = () => cohortManager.addStudentToCohort(7, 'Cohort 1')

      expect(action).toThrowError(expectation)
    })

    it('/ if cohort is not correct', () => {
      const expectation = 'No cohort found with that name'
      const action = () => cohortManager.addStudentToCohort(1, 'Cohort 5')

      expect(action).toThrowError(expectation)
    })
  })

  describe('/ removeStudentFromCohort', () => {
    beforeEach(() => {
      cohortManager.createCohort('Cohort 1')
      cohortManager.createCohort('Cohort 2')

      cohortManager.studentIdCount = 1
      cohortManager.createStudent('Alex')
      cohortManager.createStudent('Jimmy')
      cohortManager.createStudent('Molly')
      cohortManager.createStudent('Jane')

      cohortManager.addStudentToCohort(1, 'Cohort 1')
      cohortManager.addStudentToCohort(2, 'Cohort 1')
      cohortManager.addStudentToCohort(3, 'Cohort 2')
      cohortManager.addStudentToCohort(4, 'Cohort 2')
    })

    it('/ removes a student from a cohort', () => {
      const expectation = 1
      const result = cohortManager.findCohort('Cohort 1')

      cohortManager.removeStudentFromCohort(1, 'Cohort 1')

      expect(result.studentList.length).toEqual(expectation)
      expect(result.studentList[0].firstName).toEqual('Jimmy')
    })

    it('/ if only student ID is inputted', () => {
      const expectation = 'please enter a cohort name'
      const action = () => cohortManager.removeStudentFromCohort(1, '')

      expect(action).toThrowError(expectation)
    })

    it('/ only a cohort name was inputted', () => {
      const expectation = 'please enter a student ID'
      const action = () => cohortManager.removeStudentFromCohort('', 'Cohort 1')

      expect(action).toThrowError(expectation)
    })
  })
  describe('/ removeStudent', () => {
    beforeEach(() => {
      cohortManager.createCohort('Cohort 1')
      cohortManager.createCohort('Cohort 2')

      cohortManager.studentIdCount = 1
      cohortManager.createStudent('Alex')
      cohortManager.createStudent('Jimmy')
      cohortManager.createStudent('Molly')
      cohortManager.createStudent('Jane')

      cohortManager.addStudentToCohort(1, 'Cohort 1')
      cohortManager.addStudentToCohort(2, 'Cohort 1')
      cohortManager.addStudentToCohort(3, 'Cohort 2')
      cohortManager.addStudentToCohort(4, 'Cohort 2')
    })

    it('/ removes student entirely', () => {
      const expectationOne = cohortManager.allStudents
      const expectationTwo = cohortManager.findCohort('Cohort 1').studentList

      cohortManager.removeStudent(1)

      expect(expectationOne.length).toEqual(3)
      expect(expectationTwo.length).toEqual(1)
    })

    it('/ if student ID does not match any student IDs', () => {
      const expectation = 'student not found'
      const action = () => cohortManager.removeStudent(7)

      expect(action).toThrowError(expectation)
    })

    it('/ if no parameter is entered', () => {
      const expectation = 'please enter a student ID'
      const action = () => cohortManager.removeStudent()

      expect(action).toThrowError(expectation)
    })
  })
})
