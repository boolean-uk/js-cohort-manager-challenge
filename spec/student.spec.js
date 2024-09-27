import { Student } from '../src/student.js'

describe('Student', () => {
  it('creates a new instance with a firstName, lastName, githubUsername, and email property', () => {
    const result = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    expect(result.firstName).toEqual('Lee')
    expect(result.lastName).toEqual('Smith')
    expect(result.githubUsername).toEqual('koala333')
    expect(result.email).toEqual('lee.smith@hotmail.co.uk')
  })
  it('throws an error when a new instance cannot be created due to missing input', () => {
    const callback = () => new Student('Smith', 333, '')
    expect(callback).toThrowError(
      'new student cannot be created - missing input'
    )
  })
})
