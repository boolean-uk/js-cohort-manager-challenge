# Domaine Model

## User story

```
The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

## Keywords

1. **Verbs:** Create, Search, Add, Remove, Throw
2. **Nouns:** Cohort, name, student, errors

## COHORT MANAGER

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
CohortManager | this.cohortList, this.allStudents | createCohort(name(@string)) | a new cohort starting next month, a teacher creates a new class | a parameter is inputed | will return a new cohort class with a name and add it to this.cohortList |`Cohort {constructor() { this.name = name, this.studentList = []}}`
| | | | | no parameter added | throws an error stating "Cohort needs a name!" | `"Error: "Cohort needs a name!"`
| | | removeCohort(name(@string))| a teacher no longer needs cohort data | a name is inputed and it valid | found cohort is removed from this.cohortList | `this.cohortList = []`
| | | | | a name is inputed and it not found | throws an error | `Error: "No cohort found with that name"`
| | | | |No parameter is entered | Throwns an error | `Error: "Please enter a cohort name"`
| | | findCohort(name(@string)) | a teacher wants to find a specific cohort | a valid cohort name is inputted |returns the cohort object | `Cohort { name: name, studentList = []}`
| | | | | no paramter is inputed |throws an error | `"Error: 'please enter a cohort name'"`
| | | | |no cohort by that name is found |throws an error |`"Error: 'no cohort found'`
| | |createStudent(firstName(@string), lastName(@string), gitHub(@string),email(@string)) | A teacher wants to create a new student profile | valid parameters added | returns the student object with as many details as possible and adds to allStudents list  | `Student {studentID: 1, firstName: Steve, lastName: Stevenson, this.gitHub: Steveyboy, this.email: steve@hotmail.com}`
| | | | | only a name was added | returns object with only a name and empty strings | `Student {studentID: 1, firstName: Steve, lastName: '', this.gitHub: '', this.email: ''}`
| | | | | No parameter added| throws an error |`"Error: please enter a name to add student"`
| | | findStudent(studentID(@Int))| a teacher wantes to find specific student from allStudents list |returns student object |if valid ID is inputted |`Student {studentID: 1, firstName: Steve, lastName: Stevenson, this.gitHub: Steveyboy, this.email: steve@hotmail.com}`
| | | | |if ID is not found | throws an error |`"Error: 'student not found'`
| | | | |if no parameter was inputted |throws an error |`"Error: 'please enter a student ID'`
| | | addStudentToCohort(studentID(@int), cohort(@string)) | a teacher wants to specify which cohort the student belongs in|a valid studentID and cohort inputed | pushes student to corresponding cohort |`Student {studentID: 1, firstName: Steve, lastName: Stevenson, this.gitHub: Steveyboy, this.email: steve@hotmail.com}`
| | | | |if one of the parameters is left empty |throws an error |`"Error: please enter both student and cohort`
| | | | |if parameter does not match a student| throws an error| `'Error: "student not found"'`
| | | | |if parameter does not match a cohort| throws an error| `'Error: "No cohort found with that name"'`
| | | removeStudentFromCohort(studentID(@Int), cohort(@string))|a teacher would like to remove a student from a specific cohort | if a valid studentID and a cohort is inputed |The corresponding student is removed from the corresponding cohort | 'removed student no longer exists in student list'
| | | | |if only a studentID is inputed | throws Error | `'Error: "please enter a cohort name"'`
| | | | |if only a cohort is entered |throws an error | `"Error: please enter a student ID`
| | | | | if student does not exist | throws an error |`'"Error: "student not found"'`
| | | | | if cohort does not exist | throws an error |`'Error: "No cohort found with that name"'`
| | | removeStudent(studentId(@Int))|a teacher wantes to remove student entirely | a valid id is entered|removes student from enitre cohort manager | `Student is permanently removed`
| | | | | if student Id does not match| throws an error | `'Error: "student not found"'`
| | | | | if no parameter is inputted | throws an error | `'Error: "please enter a student ID"'`

## COHORT

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
| Cohort | this.name, this.studentList |||||
| | | | | | |
| | | | | | |

## STUDENT

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
| Student |this.studentID, this.firstName, this.lastName, this.gitHub, this.email, this.cohorts | | | | |
