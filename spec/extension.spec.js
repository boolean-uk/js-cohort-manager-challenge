import Student from '../src/students.js'
import CohortManager from '../src/cohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should find student', function () {
    cohortManager.addCohort('New cohort')
    const newStudent = new Student(
      1,
      'Malimo',
      'm',
      'malimo326',
      'malimo@malimo.com'
    )
    cohortManager.addStudent('New cohort', newStudent)
    expect(cohortManager.searchStudent(1)).toEqual(newStudent)
  })

  it('Should find student by name', function () {
    cohortManager.addCohort('New cohort')
    const newStudent = new Student(
      1,
      'Malimo',
      'm',
      'malimo326',
      'malimo@malimo.com'
    )
    cohortManager.addStudent('New cohort', newStudent)
    expect(cohortManager.searchStudentByName('Malimo', 'm')).toEqual(newStudent)
  })
})
