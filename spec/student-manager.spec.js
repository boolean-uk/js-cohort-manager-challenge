import { StudentManager } from '../src/student-manager.js'
import { Student } from '../src/student.js'

describe('StudentManager', () => {
  let manager
  beforeEach(() => {
    manager = new StudentManager()
  })
  it('updates the list property', () => {
    const student = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const result = manager.setList(student)
    expect(result[0].lastName).toEqual('Smith')
    expect(result[0].firstName).toEqual('Lee')
    expect(result[0].githubUsername).toEqual('koala333')
    expect(result[0].email).toEqual('lee.smith@hotmail.co.uk')
  })
  it('generates unique student id', () => {
    manager.increaseIdCount()
    manager.increaseIdCount()
    manager.increaseIdCount()
    const result = manager.increaseIdCount()
    expect(result).toEqual(4)
  })
  it('assigns a unique id to each student', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    manager.increaseIdCount()
    manager.setList(student1)
    manager.assignId()
    manager.increaseIdCount()
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    manager.setList(student2)
    const result = manager.assignId()
    expect(result).toEqual(2)
  })
  it('handles each new student separately and ensure a unique id is allocated to each', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    const student3 = new Student(
      'Matt',
      'Micheal',
      'random203956',
      'm.michael@gmail.com'
    )
    manager.handleNewItem(student1)
    manager.handleNewItem(student2)
    const result = manager.handleNewItem(student3)
    expect(result[0].id).toEqual(1)
    expect(result[1].id).toEqual(2)
    expect(result[2].id).toEqual(3)
  })
  it('includes this specific student', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    manager.handleNewItem(student1)
    manager.handleNewItem(student2)
    const result = manager.searchSchoolById(1)
    expect(result).toBe(manager.list[0])
  })
  it('this student is not in this cohort', () => {
    const callback = () => manager.searchSchoolById(1)
    expect(callback).toThrowError('student not found')
  })

  describe('finds students by', () => {
    let student1
    let student2
    let student3
    let student4
    beforeEach(() => {
      student1 = new Student(
        'Lee',
        'Smith',
        'koala333',
        'lee.smith@hotmail.co.uk'
      )
      student2 = new Student('Jen', 'Smith', 'panda93', 'jen.smith@gmail.com')
      student3 = new Student(
        'Matt',
        'Micheal',
        'random203956',
        'm.michael@gmail.com'
      )
      student4 = new Student(
        'Matt',
        'Smith',
        'citizenErased',
        'm.kerr@gmail.com'
      )
      manager.handleNewItem(student1)
      manager.handleNewItem(student2)
      manager.handleNewItem(student3)
      manager.handleNewItem(student4)
    })
    it('first name', () => {
      const result = manager.searchByFirstName('Matt', manager.list)
      expect(result).toEqual([student3, student4])
    })
    it('first name failed - no such first name', () => {
      const callback = () => manager.searchByFirstName('Mike', manager.list)
      expect(callback).toThrowError('no students found with this first name')
    })
    it('last name', () => {
      const result = manager.searchByLastName('Smith', manager.list)
      expect(result).toEqual([student1, student2, student4])
    })
    it('last name failed - no such last name', () => {
      const callback = () => manager.searchByLastName('Kerr', manager.list)
      expect(callback).toThrowError('no students found with this last name')
    })
    it('first and last name', () => {
      const result = manager.searchByFirstAndLastName('Matt Smith')
      expect(result).toEqual([student4])
    })
    it('first and last name failed - no such first and last name combination', () => {
      const callback = () => manager.searchByFirstAndLastName('Jen Michael')
      expect(callback).toThrowError('no such first and last name combination')
    })
  })
})
