# DOMAIN MODEL

## Cohort

Class | Properties | Methods | Notes | Scenario | Output | Example
----- | ---------- | ------- | ----- | -------- | ------ | -------
| Cohort | cohortList @Array | createCohort(@String) | new cohort created with a cohort name | valid cohort name input (i.e. string) | return true, cohort added to cohortList | `createCohort("Cohort 1") => true, cohortList = [{name: "Cohort 1", students: []}]` |
| | | | | invalid cohort name input | throw error | `createCohort(1) => "cohort name must be a valid string"` |
| | | findCohort(@String) | search for cohort by cohort name | valid & existing cohort name input | return cohort as an object | `findCohort("Cohort 1") => {name: "Cohort 1", students: []}` |
| | | | | invalid cohort name input | throw error | `findCohort(1) => "cohort does not exist"` |
| | | addStudentToCohort(@String, @Int) | add student to specific cohort. @String = cohortName, @Int = studentId | valid & existing cohort name and studentId input | return true, cohortList is updated | `addStudentToCohort("Cohort 1", 1) => true, cohortList = [{name: "Cohort 1", students: [{studentId: 1, firstName: "John", lastName: "Doe", githubUsername: "johndoe", email: "john@doe.com"}]}]` |
| | | | | invalid cohort name or student input | throw error | `addStudentToCohort(1, "hello") => "student does not exist" or "cohort does not exist"` |
| | | removeCohort(@String) | remove cohort by cohortName | valid & existing cohort name input | return true, cohortList updated | `removeCohort("Cohort 1") => true, cohortList = []` |
| | | | | invalid cohort name input | throw error | `removeCohort(1) => "cohort does not exist"` |
| | | removeStudentFromCohort(@String, @Int) | remove student from specific cohort using cohortName @String and studentId @Int | valid & existing cohort name input, valid studentId input  | return true, cohortList updated | `removeStudentFromCohort("Cohort 1, 1") => true, cohortList = [{name: "Cohort 1", students: []}]` |
| | | | | invalid cohort name/studentId input | throw error | `removeStudentFromCohort(1) => "student does not exist" or "cohort does not exist"` |

## Student

Class | Properties | Methods | Notes | Scenario | Output | Example
----- | ---------- | ------- | ----- | -------- | ------ | -------
| Student | studentID @Int, firstName @String, lastName @String, githubUsername @String, email @String | | new student details input to create student | valid details entered | new student is created | `const student1 = new Student(1, "John", "Doe", "johndoe", "john@doe.com")` |
