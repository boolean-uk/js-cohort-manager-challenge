
// Import necessary classes and functions
//const CohortManager = require('../src/index.js');
/*import CohortManager from "../../src/index.js"; 
import Cohort from "../../src/cohort.js";
import Student from "../../src/student.js";

// Describe block for Cohort Manager 
describe('Cohort Manager', () => {
  let cohortManager;
  
  // Before each test, create a new Cohort Manager 
  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  describe('createCohort', () => {
    it('should create a new cohort', () => {
      
      cohortManager.createCohort('class 11');
      expect(cohortManager.cohorts.length).toEqual(1);
      expect(cohortManager.cohorts[0].cohortName).toEqual('class 11');
    });

    it('should throw an error if cohort name is not a string or empty', () => {
      const invalidCohortName = 123;
      expect(() => cohortManager.createCohort(invalidCohortName)).toThrowError();
    });

    it('should throw an error if cohort name matches existing cohort', () => {
      const existingCohortName = 'ExistingCohort';
      cohortManager.createCohort(existingCohortName);
      expect(() => cohortManager.createCohort(existingCohortName)).toThrowError();
    });
  });


  
  
  describe('searchCohort', () => {
    it('should search cohort by name!', () => {
  const expected = cohortManager.createCohort('class 11');
  cohortManager.createCohort('class 0');
  const expected2 = cohortManager.createCohort('class 13');
  cohortManager.createCohort('class 4');
  const result = cohortManager.searchCohort('class 11');
  const result2 = cohortManager.searchCohort('class 13');
  expect(result).toEqual(expected);
  expect(result2).toEqual(expected2);
  });

});


describe('removeCohort', () => {
    it('should remove a cohort by name', () => {
      // Create cohorts
      cohortManager.createCohort('class 11');
      cohortManager.createCohort('class 15');
      cohortManager.createCohort('class 18');
    
      // Ensure all three cohorts are initially created
      expect(cohortManager.cohorts.length).toEqual(3);
    
      // Remove a cohort by name
      cohortManager.removeCohortByName('class 11');
    
      // Ensure 'class 11' cohort is removed
      expect(cohortManager.cohorts.length).toEqual(2);
    });
  });
  
   // it('should throw an error if the cohort to be removed is not found', () => {
   //   // Ensure the initial state has three cohorts
   //   expect(cohortManager.cohorts.length).toEqual(3);
   //   
   //   // Attempt to remove a non-existing cohort and expect an error
   //   expect(() => cohortManager.removeCohortByName('nonExistingClass')).toThrowError(
   //     'cohortName cant be found!'
   //   );
   // 
   //   // Ensure the number of cohorts remains the same
   //   expect(cohortManager.cohorts.length).toEqual(3);
   // });
  



  

 
  /* it('add a student to a specific cohort', () => {
    // Create the cohort first
    cohortManager.createCohort('Class 11');
  
    // Now add a student to the cohort
    const studentFirstName = 'John';
    const studentLastName = 'Doe';
    const githubUsername = 'faiza-tech';
    const email = 'abc123@gmail.com';
    const studentID = 2;
  
    // Get the cohort using searchCohort
    const cohort = cohortManager.searchCohort('Class 11');

    console.log('Cohort:', cohort); // Add this line for debugging
  
    // Add a student to the cohort
    cohortManager.addStudentToSpecificCohort(
      'Class 11',
      studentID,
      studentFirstName,
      studentLastName,
      githubUsername,
      email
    );

    const addedStudent = cohort.students.find(
      (student) =>
        student.firstName === studentFirstName &&
        student.lastName === studentLastName
    );
    

  expect(addedStudent).toBeDefined();
  expect(addedStudent.firstName).toEqual(studentFirstName);
  expect(addedStudent.lastName).toEqual(studentLastName);
  expect(addedStudent.studentID).toEqual(studentID);
  expect(addedStudent.studentEmail).toEqual(email);
  expect(addedStudent.githubUsername).toEqual(githubUsername);
});
*/
  

/*});*/




import CohortManager from "../../src/index.js";
import Cohort from "../../src/cohort.js";
import Student from "../../src/student.js";

// Describe block for Cohort Manager
describe('Cohort Manager', () => {
  let cohortManager;

  // Before each test, create a new Cohort Manager
  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  describe('createCohort', () => {
    it('should create a new cohort', () => {
      cohortManager.createCohort('class 11');
      expect(cohortManager.cohorts.length).toEqual(1);
      expect(cohortManager.cohorts[0].cohortName).toEqual('class 11');
    });

    it('should throw an error if cohort name is not a string or empty', () => {
      const invalidCohortName = 123;
      expect(() => cohortManager.createCohort(invalidCohortName)).toThrowError();
    });

    it('should throw an error if cohort name matches existing cohort', () => {
      const existingCohortName = 'ExistingCohort';
      cohortManager.createCohort(existingCohortName);
      expect(() => cohortManager.createCohort(existingCohortName)).toThrowError();
    });
  });

  describe('searchCohort', () => {
    it('should search cohort by name!', () => {
      const expected = cohortManager.createCohort('class 11');
      cohortManager.createCohort('class 0');
      const expected2 = cohortManager.createCohort('class 13');
      cohortManager.createCohort('class 4');
      const result = cohortManager.searchCohort('class 11');
      const result2 = cohortManager.searchCohort('class 13');
      expect(result).toEqual(expected);
      expect(result2).toEqual(expected2);
    });
  });

  describe('removeCohort', () => {
    it('should remove a cohort by name', () => {
      // Create cohorts
      cohortManager.createCohort('class 11');
      cohortManager.createCohort('class 15');
      cohortManager.createCohort('class 18');

      // Ensure all three cohorts are initially created
      expect(cohortManager.cohorts.length).toEqual(3);

      // Remove a cohort by name
      cohortManager.removeCohortByName('class 11');

      // Ensure 'class 11' cohort is removed
      expect(cohortManager.cohorts.length).toEqual(2);
    });
  });

  describe('Cohort', () => {
    let cohort;

    beforeEach(() => {
      cohort = cohortManager.createCohort('class 11');
    });

    it('should add a student to the cohort', () => {
      const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
      cohort.addStudent(student.studentID, student.firstName, student.lastName, student.githubUsername, student.email);
      const foundStudent = cohort.searchByName('John');
      expect(foundStudent).toEqual(student);
    });

       /* it('should remove a student from the cohort', () => {
      const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
      cohort.addStudent(student.studentID, student.firstName, student.lastName, student.githubUsername, student.email);
      cohort.removeStudent(student.studentID);
      const foundStudent = cohort.searchByName('John');
      expect(foundStudent).toBeUndefined();
    });*/


   it('should remove a student from the cohort', () => {
      // Add a student to the cohort
      const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
      cohort.addStudent(student.studentID, student.firstName, student.lastName, student.githubUsername, student.email);
    
      // Try to remove a non-existent student (use an invalid student ID)
      expect(() => cohort.removeStudent(2)).toThrowError('Student not found');
    });
    

    it('should throw an error if student is not found in the cohort', () => {
      const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
      expect(() => cohort.removeStudent(student.studentID)).toThrowError('Student not found');
    });

  });
});
