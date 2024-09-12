const {CohortManager} = require('../src/cohort-manager')
const {cohortList}= require('../src/existing-cohort')


describe('COHORT MANAGER', () => {

  let cohortManager ;

  beforeEach(()=>{

    cohortManager = new CohortManager();

  })

  describe('Create , Search a Cohort  with a name, and add a student to a specific cohort', ()=>{
    
    it('Can Create a cohort with a cohort name', ()=>{
      //GIVEN
        const newCohort = 'cohort8'

        //WHEN
        const result = cohortManager.create(newCohort)

        //THEN 
        expect(result).toEqual({
          name: 'cohort8',
          students : []
        })
    })

    it('Can search for a cohort with a cohort name', ()=>{
      //GIVEN
      const cohortName = 'cohort1';

      //WHEN 
      const result = cohortManager.searchCohort(cohortName)

      //THEN
      expect(result).toEqual(cohortList[0])

    })

    

    it('Can add a student to a specific cohort and also check if cohort is full', () => {
      // GIVEN
      const cohortName = 'cohort1';
      
      const studentInfo = {
        name: 'Jamie',
        age: '18',
        email: 'jamie737@gmail.com',
        github: 'jamiecode'
      };
    
      // WHEN
      const result = cohortManager.addStudent(cohortName, studentInfo);
    
      // THEN
      if (typeof result === 'string') {
        // If result is a string, it means the maximum capacity was reached
        expect(result).toEqual(`${cohortName} has reached its maximum capacity`);
      } else {
        // If result is an object, it means a student was successfully added
        expect(result).toBeDefined();
        expect(result.name).toEqual(studentInfo.name);
        expect(result.id).toBeDefined(); 
        expect(result.age).toEqual(studentInfo.age);
      }
    });
    

    it('Can throw an error if cohort not found ',()=>{
      //GIVEN
      const nonexistentcohort = 'cohort12'
      const studentInfo = {
        name: 'Anabel',
        age: '23',
        email: 'anabelsmil@gmail.com',
        github: 'anabelsmil'
      }; 
     
       const result =  cohortManager.addStudent(nonexistentcohort, studentInfo )
        expect(result).toEqual('Cohort not found')
      
    })

  })

  describe('Can remove cohort, Can remove student from a specific cohort', ()=>{
    it('Remove a cohort by cohort name', ()=>{

       // GIVEN
       const cohortNameToRemove = 'cohort3';
   
       // WHEN
       const result = cohortManager.removeCohort(cohortNameToRemove);
   
        //THEN
        expect(result).toBeDefined();
        expect(result[0].name).toBe(cohortNameToRemove);
    })


    it('Return "Cohort not found" if the cohort does not exist', () => {
      // GIVEN
      const nonExistentCohortName = 'nonexistentcohort';
  
      // WHEN
      const result = cohortManager.removeCohort(nonExistentCohortName);
  
      // THEN
      expect(result).toEqual('Cohort not found');
    });

    //Can remove students
  })
  
  it('Remove a student by name when both cohort and student are found', () => {
    //GIVEN
    const cohortName = 'cohort1';
    const studentNameToRemove = 'Tosin';

    //WHEN
    const result = cohortManager.removeStudent(cohortName, studentNameToRemove)

    //THEN
    expect(result).toBeDefined
    expect(result[0].name).toBe(studentNameToRemove);

  })


  it('Return "Cohort not found" if the cohort does not exist', () => {
    // GIVEN
    const nonExistentCohortName = 'nonexistentcohort';
    const studentNameToRemove = 'Eazy';

    // WHEN
    const result = cohortManager.removeStudent(nonExistentCohortName, studentNameToRemove);

    // THEN
    expect(result).toEqual('Cohort not found');
  });

  it('Return "Student not found" if the student does not exist in the cohort', () => {
    // GIVEN
    const cohortName = 'cohort1';
    const nonExistentStudentName = 'nonexistentstudent';

    // WHEN
    const result = cohortManager.removeStudent(cohortName, nonExistentStudentName);

    // THEN
    expect(result).toEqual('Student not found');
  });

 
})


