import CohortList, { Cohort, Student } from '../src/index.js'

describe('CohortList', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortList()
  })

  it('should exist', () => {
    expect(cohortList).toBeInstanceOf(CohortList)
  })

  it('should create a new cohort', () => {
    const result = cohortList.addCohort('cohort12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.cohortName).toBe('cohort12')
    expect(cohortList.cohorts.length).toBe(1)
  })

  it('should be able to search for a cohort', () => {
    cohortList.addCohort('cohort12')

    const result = cohortList.searchCohort('cohort12')

    expect(result.cohortName).toBe('cohort12')
  })

  it('should throw an error when trying to search for a non existent cohort', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    expect(() => cohortList.searchCohort('cohort15')).toThrow(
      'cohort not found'
    )
  })

  it('should remove a cohort', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    expect(cohortList.cohorts.length).toBe(3)

    const removed = cohortList.removeCohort('cohort13')

    expect(removed.cohortName).toBe('cohort13')
    expect(cohortList.cohorts.length).toBe(2)
    expect(cohortList.cohorts[0].cohortName).toBe('cohort12')
    expect(cohortList.cohorts[1].cohortName).toBe('cohort14')
  })

  it('should throw an error when trying to remove a non existent cohort', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    expect(() => cohortList.removeCohort('cohort15')).toThrow(
      'cohort not found'
    )
  })

  it('should add a student to a cohort and throw an error if cohort not found', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    const result = cohortList.addStudent(
      'cohort12',
      'Jane',
      'Doe',
      'JaneDoe',
      'janedoe@hotmail.com'
    )

    expect(result).toBeInstanceOf(Student)

    expect(result.firstName).toBe('Jane')
    expect(result.lastName).toBe('Doe')
    expect(result.githubUsername).toBe('JaneDoe')
    expect(result.email).toBe('janedoe@hotmail.com')

    expect(cohortList.cohorts[0].students.length).toBe(1)
    expect(cohortList.cohorts[0].students[0].firstName).toBe('Jane')
    expect(cohortList.cohorts[0].students[0].studentID).toBe(1)

    cohortList.addStudent(
      'cohort12',
      'Mark',
      'Something',
      'MarkSomething',
      'marksomething@hotmail.com'
    )

    expect(cohortList.cohorts[0].students.length).toBe(2)
    expect(cohortList.cohorts[0].students[1].firstName).toBe('Mark')
    expect(cohortList.cohorts[0].students[1].studentID).toBe(2)

    cohortList.addStudent(
      'cohort13',
      'Jennifer',
      'Somebody',
      'JenniferSomebody',
      'jennifersomebody@hotmail.com'
    )

    expect(cohortList.cohorts[0].students.length).toBe(2)
    expect(cohortList.cohorts[1].students.length).toBe(1)
    expect(cohortList.cohorts[1].students[0].firstName).toBe('Jennifer')
    expect(cohortList.cohorts[1].students[0].studentID).toBe(3)

    expect(() =>
      cohortList.addStudent(
        'cohort15',
        'Jane',
        'Doe',
        'JaneDoe',
        'janedoe@hotmail.com'
      )
    ).toThrow('cohort not found')
  })

  it('should remove a student from a cohort and throw an error if student or cohort not found', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    cohortList.addStudent(
      'cohort12',
      'Jane',
      'Doe',
      'JaneDoe',
      'janedoe@hotmail.com'
    )

    cohortList.addStudent(
      'cohort12',
      'Mark',
      'Something',
      'MarkSomething',
      'marksomething@hotmail.com'
    )

    cohortList.addStudent(
      'cohort13',
      'Jennifer',
      'Somebody',
      'JenniferSomebody',
      'jennifersomebody@hotmail.com'
    )

    const removed = cohortList.removeStudent('cohort12', 2)

    expect(removed.studentID).toBe(2)
    expect(removed.firstName).toBe('Mark')
    expect(cohortList.cohorts[0].students.length).toBe(1)
    expect(cohortList.cohorts[0].students[0].studentID).toBe(1)
    expect(cohortList.cohorts[0].students[0].firstName).toBe('Jane')

    expect(() => cohortList.removeStudent('cohort15', 1)).toThrow(
      'cohort not found'
    )

    expect(() => cohortList.removeStudent('cohort12', 5)).toThrow(
      'student not found'
    )
  })

  it('should find a student and throw an error if student not found', () => {
    cohortList.addCohort('cohort12')
    cohortList.addCohort('cohort13')
    cohortList.addCohort('cohort14')

    cohortList.addStudent(
      'cohort12',
      'Jane',
      'Doe',
      'JaneDoe',
      'janedoe@hotmail.com'
    )

    cohortList.addStudent(
      'cohort12',
      'Mark',
      'Something',
      'MarkSomething',
      'marksomething@hotmail.com'
    )

    cohortList.addStudent(
      'cohort13',
      'Jennifer',
      'Somebody',
      'JenniferSomebody',
      'jennifersomebody@hotmail.com'
    )

    const result = cohortList.searchStudentByID(2)

    expect(result.studentID).toBe(2)
    expect(result.firstName).toBe('Mark')

    expect(() => cohortList.searchStudentByID(5)).toThrow('student not found')
  })
})
