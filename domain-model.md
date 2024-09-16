## user story

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## Cohort Manager
* Verb/Methods:

      createCohort(cohortName: string): Creates a new cohort with the given name.
      searchCohort(cohortName: string) -> Cohort: Searches for a cohort by name and returns the cohort object.
      removeCohort(cohortName: string): Removes a cohort by name.

      addStudentToCohort(cohort: Cohort, student: Student): Adds a student to a specific cohort.
      removeStudentFromCohort(cohort: Cohort, student: Student): Removes a student from a specific cohort.

      throwNotFoundError(message: string): Throws an error if a student or cohort is not found.

* Noun/Properties:
      CohortManager, cohorts (List): A collection of cohorts.

| Status | Class  | Methods    | Inputs   | Scenario  | Output  
| ------ | ------ | ---------- | -------- | --------- | ------- |
||CohortManager ||||||
|||createCohort| name(string ) |typeof input === String, input.length > 0 ,typeof input !== String OR input.length === 0 , nameInput matches existing cohort  |  input === string | cohort.push(cohort) if input not string then throw error or input matches with existing cohortId then throw error
| | |searchCohort(cohortName: string) -> Cohort |cohortName(string) |Search for a cohort by name | Cohort object or throw error(cohort not found)
|||removeCohort(cohortName: string)|cohortName (string)|Remove a cohort by name|remove the wanted cohort if not then throw error
|||addStudentToCohort(cohort: Cohort, student: Student)|cohort (Cohort object), student (Student object)|Add a student to a specific cohort||
|||removeStudentFromCohort(cohort: Cohort, student: Student)|studentId:number,cohortId: number|Remove a student from a specific cohort|return student found ,if not then return null





## Cohort

* Noun/Properties:
      cohortName (String): The name of the cohort.
      students (List of students object): A collection of students.

* Verb/Methods:
      addStudent(student): Adds a student to the cohort.
      removeStudent(studentID): Removes a student from the cohort.


| object | method | input | scenario | output
| ------ | ------ | ----- | -------- | -------
 cohort | addStudent(firstName:string,LastName: string)|firstName:string ,lastName: string|create a new student in the cohort|new student
| | searchByName()| name:string | search student by name | student name otherwise throw error
| | removeStudent()| name:string | remove student to cohort | remove student  otherwise throw error


## student

* Properties:
      studentID (String): The ID of the student.
      firstName (String): The first name of the student.
      lastName (String): The last name of the student.
      githubUsername (String): The GitHub username of the student.
      email (String): The email address of the student.



# Relationships:

* The CohortManager has many Cohorts.
* Each Cohort has a name (cohortName) and many Students.
* Each Student has an ID (studentID), first name (firstName), last name (lastName), GitHub username (githubUsername), and email (email).