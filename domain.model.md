# Standard requirements

## Standard

The Cohort Manager should be able to support the following interactions

- ✅ Create a cohort with a cohort name
- ✅ Search for a cohort by cohort name
- ✅ Add student to a specific cohort
- ✅ Remove a cohort by cohort name
- ✅ Remove student from a specific cohort
- ✅ Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## Extended

- ✅ Search for student by student ID
- ✅ Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- ✅ Cohorts can't have the same name, and can't exist without a name
- ✅ The same student can't exist in multiple cohorts.
- ✅ A student can't be removed from a cohort if it wasn't present in the first place.
- ✅ Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes

### Cohort List

| Objects    | Properties      | Messages                                 | Scenario                                 | Output                                                   |
| ---------- | --------------- | ---------------------------------------- | ---------------------------------------- | -------------------------------------------------------- |
| CohortList | list@Arr        | createCohort(name@Str)                   | Name is not empty                        | Object of created cohort                                 |
|            | studentList@Arr |                                          | Name is empty                            | Thrown error: "Enter name for create new cohort"         |
|            |                 |                                          | Entered the exist name of cohort         | Thrown error: "Cohort with this name has already exist"  |
|            |                 | getCohortByName(name@Str)                | Cohort with entered name exist           | Object of searched cohort                                |
|            |                 |                                          | Cohort with entered name doesn't exist   | Thrown error: "Cohort not Found"                         |
|            |                 | addStudent(student@Str, cohort@str)      | Cohort with entered name exist           | List of students of entered cohort                       |
|            |                 |                                          | Cohort with entered name doesn't exist   | Thrown error: "Cohort not Found"                         |
|            |                 |                                          | Add 25 students                          | Thrown error: "Exceeded capacity of students"            |
|            |                 |                                          | Added the same student in another cohort | Thrown error: "This student has already added to cohort" |
|            |                 | removeCohort(name@Str)                   | Cohort with entered name exist           | Removed cohort                                           |
|            |                 |                                          | Cohort with entered name doesn't exist   | Thrown error: "Cohort not Found"                         |
|            |                 | removeStudent(studentId@Int, cohort@Str) | Student exist in entered cohort          | Removed student                                          |
|            |                 |                                          | Student doesn't exist in entered cohort  | Thrown error: "Student not Found"                        |
|            |                 |                                          | Cohort doesn't exist                     | Thrown error: "Cohort not Found"                         |
|            |                 | getStudentById(studentId@Int)            | Student exist                            | Object of Student                                        |
|            |                 |                                          | Student doesn't exist                    | Thrown error: "Student not Found"                        |
|            |                 | getStudentByName(studentName@Str)        | Student name exist                       | List of students                                         |
|            |                 |                                          | Student name doesn't exist               | Thrown error: "Student not found"                        |

### Student

| Objects | Properties     | Messages | Scenario | Output |
| ------- | -------------- | -------- | -------- | ------ |
| Student | studentID@Int  |          |          |        |
|         | firstName@Str  |          |          |        |
|         | lastName@Str   |          |          |        |
|         | githubName@Str |          |          |        |
|         | email@Str      |          |          |        |

### Cohort

| Objects | Properties       | Messages | Scenario | Output |
| ------- | ---------------- | -------- | -------- | ------ |
| Cohort  | id@Int           |          |          |        |
|         | name@Str         |          |          |        |
|         | studentsList@Arr |          |          |        |
