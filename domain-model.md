# DOMAIN MODEL

## CORE REQUIREMENTS

1. Create a cohort with a cohort name

   ```js
   // The user will need to create a new CohortManager(), for example
   const myCohortManager = new CohortManager()
   // then do:
   const newCohort = Cohort('some cool name')
   // and finally:
   myCohortManager.handleNewItem(newCohort)
   ```

2. Search for a cohort by cohort name

   ```js
   // if the set up in 1. has been done, then:
   myCohortManager.searchByName('some cool name')
   ```

3. Add student to a specific cohort

    ```js
   // if the set up in 1. has been done, then:
   const studentManager = new StudentManager()
   const newStudent = new Student()
   studentManager.handleNewItem(newStudent)
   newCohort.addStudent(1, studentManager)
   // this assume that a school would first want their students to exist in their 
   // systems and all be stored somewhere, before starting to move them in 
   // and out of cohorts as required. Also, it means that, should a cohort
   // be deleted by mistake (and they can be removed), the student data
   // would persist within studentManager.
   ```

4. Remove a cohort by cohort name

    ```js
   // if the set up in 1. has been done, then:
   myCohortManager.removeCohort('some cool name')
   ```

5. Remove student from a specific cohort

    ```js
   // if the set up in 1. has been done, and 4. did not happen:
   newCohort.removeStudent(1)
   ```

6. Throw errors if student or cohort not found - DONE

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email. - DONE

## CORE DOMAIN MODEL

|Requirement number|Class|Methods|Inputs|Scenarios|Outputs|Data|
|-|-|-|-|-|-|-|
||Manager()|||||properties: properties: idCount(@integer), list(@objects[])|
|||setList()|items(@objects)||list(@objects)
|||setIDCount()||| this.idCount(@integer)|
|||assignID()||| this.idCount(@integer)|
|||handleNewItems()||| this.list|
||CohortManager()|||||properties: same as Manager()|
|2||searchBy()|cohortName(@string)|cohort found| cohort(@Cohort)|
|6||||cohort not found| throw error|
|4||removeCohort()|cohortName(@string)|cohort found| this.list(@cohort[])|
|6||||cohort not found|throw error|
||Cohort()|||||properties: id(@string), studentCount(@integer) cohortName(@string), students(@Student[])|
|1||constructor()|cohortName(@string)|invalid input| throw error|
|||||valid input| new instance of class Cohort()|
|||searchCohortById()|studentId(@string)|student found| cohort(@Cohort)|
|||||student not found| throw error|
|3||addStudent()|id(@string)|student found|this.students(@Student[])|
|||||student not found|throw error|
|5||removeStudent()|id(@string)|student found|this.students(@cohort[])|
|6||||student not found| throw error|
||StudentManager()||||properties: same as Manager()|
|||searchSchoolById()|studentId(@string)|student found| cohort(@Cohort)|
|||||student not found| throw error|
||Student()|||||properties: id(@string), firstName(@string), lastName(@string), githubUsername(@string), email(@string)|
|||constructor()|firstName(@string), lastName(@string), githubUsername(@string), email(@string)|valid input| throw error|
|||||valid input| new instance of class Student()|

## EXTENDED REQUIREMENTS

- Your program should be composed of at least two classes - DONE
- Cohort can't exist without a name - DONE (will throw an error)
- Search for student by student ID - DONE (searchCohortById() and searchSchoolById())
- A student can't be removed from a cohort if it wasn't present in the first place. - DONE (will throw an error)
- Cohorts have fixed capacity at 24 students. - DONE Adding students is not possible beyond the 24 limit. - DONE, will throw an error
- Cohorts can't have the same name - DONE
- The same student can't exist in multiple cohorts. - DONE
- Search for students by name (first and last) and return all matching results - DONE

### todo

- refactor: aim for dry code + check for single responsibility.
- go through existing code base - see whether additional tests are needed

## EXTENDED DOMAIN MODEL

### as an addition to core (above)

|pre-existent or new|Class|Methods|Inputs|Scenarios|Outputs|Data|
|-|-|-|-|-|-|-|
|NEW|Cohort()|||||new properties: capacity(24), occupancy(@integer) also new: it extends StudentList()|
||searchByFirstAndLastName()| searchByFirstName(), searchByLastName(), cohort.students(@student[]), firstName(@string), lastName(@string)| first and last name found | a list of the students who match|
|||| first name found only | a list of the students who match|
|||| last name found only | a list of the students who match|
|||| no match found | throw new Error('the names provided do not exist in this cohort')|
||searchByFirstName()|
||searchByLastName()|
|||||valid input| new instance of class Cohort()|
|NEW||increaseOccupancyByOne()||occupancy < 24| occupancy(@integer)|
|||||occupancy >= 24|throw new Error('this cohort is full')|
|NEW||decreaseOccupancyByOne()||occupancy > 0| occupancy(@integer)|
|||||occupancy === 0|throw new Error('this cohort is empty')|
|NEW||isFull()|occupancy(@integer), capacity(@integer)|occupancy < capacity|false|
|||||occupancy === capacity|true|
|||assignCohortNameToStudent()|studentManager, studentId, cohortName(@string)|student.cohortName is undefined| student(@Student)|
|||assignCohortNameToStudent()|studentManager, studentId, cohortName(@string)|student.cohortName is not undefined|throw new Error('student already enrolled in another cohort - to add them here, remove them from their current cohort first')|
|||clearStudentCohortName()|studentManager, studentId||student(@object)| student.cohortName = undefined
|||addStudent()|new input: isFull()| new scenario: isFull returns true| throw new Error('cannot add students - this cohort is full)|
|||removeStudent()|new input: cohort.occupancy|new scenario: the cohort is empty|throw new Error('no students to be removed - cohort empty')|
||searchByFirstAndLastName()| searchByFirstName(), searchByLastName(), studentManager.list(@student[]), firstName(@string), lastName(@string)| first and last name found | a list of the students who match|
|||| first name found only | a list of the students who match|
|||| last name found only | a list of the students who match|
|||| no match found | throw new Error('the names provided do not exist in our system')
||CohortManager()||||||
|NEW|isNameNew()|cohortName(@string), cohortList(@Cohort[])|name is found|false|
||||name is not found|true|
|NEW|handleNewCohort()|cohort(@Cohort), nameIsNew(), handleNewItem()|isNameNew returns true|cohortlist()|
|NEW|||isNameNew returns false|throw new Error('this cohort cannot be added - cohort name already taken)|
||Student()|||||new property: cohortName| cohortName default value: undefined|
||StudentManager()|
||searchByFirstAndLastName()| searchByFirstName(), searchByLastName(), studentManager.list(@student[]), firstName(@string), lastName(@string)| first and last name found | a list of the students who match|
|||| first name found only | a list of the students who match|
|||| last name found only | a list of the students who match|
|||| no match found | throw new Error('the names provided do not exist in our system')|
