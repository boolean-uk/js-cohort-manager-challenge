import CohortList from '../src/CohortList.js'
import Student from '../src/Student.js'

// Configuration of students
const student1 = new Student(
  1,
  'Nazar',
  'Tymiv',
  'NazarTymiv',
  'hello1@gmail.com'
)

const student2 = new Student(
  2,
  'Name 2',
  'Last Name 2',
  'GitHub Name 2',
  'hello2@gmail.com'
)

const student3 = new Student(
  3,
  'Nazar',
  'Last Name 2',
  'GitHub Name 3',
  'hello3@gmail.com'
)

// Tests
describe('Cohort', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortList()
  })

  // Create Cohort
  it('Name is not empty: should return object of created cohort', () => {
    const expected = { id: 1, name: 'Cohort 1', studentsList: [] }

    const res = cohortList.createCohort('Cohort 1')

    expect(res.id).toEqual(expected.id)
    expect(res.name).toEqual(expected.name)
    expect(res.studentsList).toEqual(expected.studentsList)
  })

  it('Name is empty: Thrown error', () => {
    const expected = 'Enter name for create new cohort'

    expect(() => cohortList.createCohort('')).toThrowError(expected)
  })

  it('Entered the exist name of cohort: Thrown error', () => {
    const expected = 'Cohort with this name has already exist'

    cohortList.createCohort('Boolean')

    expect(() => cohortList.createCohort('Boolean')).toThrowError(expected)
  })

  // Search Cohort By Cohort Name
  it('with entered name exist: Object of searched cohort', () => {
    const expected = { id: 2, name: 'Cohort 2', studentsList: [] }

    cohortList.createCohort('Cohort 1')
    cohortList.createCohort('Cohort 2')
    cohortList.createCohort('Cohort 3')

    const res = cohortList.getCohortByName('Cohort 2')

    expect(res.id).toEqual(expected.id)
    expect(res.name).toEqual(expected.name)
    expect(res.studentsList).toEqual(expected.studentsList)
  })

  it("with entered name doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    expect(() => cohortList.getCohortByName('Cohort 1')).toThrowError(expected)
  })

  // Add Student to a Specific Cohort
  it('with entered name exist: List of students of entered cohort', () => {
    cohortList.createCohort('Boolean')

    const expected = [student1, student2]

    cohortList.addStudent(student1, 'Boolean')
    const res = cohortList.addStudent(student2, 'Boolean')

    expect(res).toEqual(expected)
    expect(cohortList.studentsList[0]).toEqual(student1)
    expect(cohortList.studentsList[1]).toEqual(student2)
    expect(cohortList.studentsList.length).toEqual(2)
  })

  it("with entered name doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    expect(() => cohortList.addStudent(student1, 'Boolean')).toThrowError(
      expected
    )
  })

  it('Add 25 students: Thrown error', () => {
    const expected = 'Exceeded capacity of students'

    cohortList.createCohort('Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')
    cohortList.addStudent(new Student(), 'Boolean')

    expect(() => cohortList.addStudent(new Student(), 'Boolean')).toThrowError(
      expected
    )
  })

  it('Added the same student in another cohort: Thrown error', () => {
    const expected = 'This student has already added to cohort'

    cohortList.createCohort('Boolean')
    cohortList.createCohort('Cohort 1')

    cohortList.addStudent(student1, 'Boolean')

    expect(() => cohortList.addStudent(student1, 'Cohort 1')).toThrowError(
      expected
    )
  })

  // Remove Cohort
  it('with entered name exist: Removed cohort', () => {
    cohortList.createCohort('Cohort 1')
    const expected = cohortList.createCohort('Cohort 2')
    cohortList.createCohort('Cohort 3')

    const res = cohortList.removeCohort('Cohort 2')

    expect(res).toEqual(expected)
    expect(cohortList.list.length).toEqual(2)
  })

  it("Cohort with entered name doesn't exist", () => {
    const expected = 'Cohort not Found'

    expect(() => cohortList.removeCohort('Cohort 1')).toThrowError(expected)
  })

  // Remove Student
  it('Student exist in entered cohort: Removed student', () => {
    const expected = student2

    cohortList.createCohort('Boolean')
    cohortList.addStudent(student1, 'Boolean')
    cohortList.addStudent(student2, 'Boolean')

    const res = cohortList.removeStudent(2, 'Boolean')

    expect(res).toEqual(expected)
    expect(cohortList.list[0].studentsList.length).toEqual(1)
    expect(cohortList.list[0].studentsList[0]).toEqual(student1)
    expect(cohortList.studentsList.length).toEqual(1)
    expect(cohortList.studentsList[0]).toEqual(student1)
  })

  it("Student doesn't exist in entered cohort: Thrown error", () => {
    const expected = 'Student not Found'

    cohortList.createCohort('Boolean')

    expect(() => cohortList.removeStudent(1, 'Boolean')).toThrowError(expected)
  })

  it("Cohort doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    cohortList.createCohort('Cohort 1')
    cohortList.addStudent(student1, 'Cohort 1')

    expect(() => cohortList.removeStudent(1, 'Boolean')).toThrowError(expected)
    expect(cohortList.list[0].studentsList[0]).toEqual(student1)
  })

  // Search Student By studentId
  it('Student exist: Object of Student', () => {
    const expected = student1

    cohortList.createCohort('Boolean')
    cohortList.createCohort('Cohort 1')
    cohortList.addStudent(student1, 'Boolean')
    cohortList.addStudent(student2, 'Cohort 1')

    const res = cohortList.getStudentById(1)

    expect(res).toEqual(expected)
  })

  it("Student doesn't exist: Thrown error", () => {
    const expected = 'Student not Found'

    expect(() => cohortList.getStudentById(1)).toThrowError(expected)
  })

  // Search Student By Name (first and last)
  it('Student name exist: List of students', () => {
    const expected = [student1, student3]

    cohortList.createCohort('Boolean')
    cohortList.addStudent(student1, 'Boolean')
    cohortList.addStudent(student2, 'Boolean')
    cohortList.addStudent(student3, 'Boolean')

    const res = cohortList.getStudentByName('Nazar')

    expect(res).toEqual(expected)
  })

  it('Student last name exist: List of students', () => {
    const expected = [student2, student3]

    cohortList.createCohort('Boolean')
    cohortList.addStudent(student1, 'Boolean')
    cohortList.addStudent(student2, 'Boolean')
    cohortList.addStudent(student3, 'Boolean')

    const res = cohortList.getStudentByName('Last Name 2')

    expect(res).toEqual(expected)
  })

  it("Student name doesn't exist: Thrown error", () => {
    const expected = 'Students not found'

    expect(() => cohortList.getStudentByName('Nazar')).toThrowError(expected)
  })
})
