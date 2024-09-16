## Domain Model

#### Standard Requirements
```
The Cohort Manager should be able to support the following interactions

✔ Create a cohort with a cohort name
✔ Search for a cohort by cohort name
✔ Add student to a specific cohort
✔ Remove a cohort by cohort name
✔ Remove student from a specific cohort
✔ Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```
--- 

#### Extensions
```
✔ Search for student by student ID
✔ Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
✔ Cohorts can't have the same name, and can't exist without a name
✔ The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes
```

| Method  | Input | Data | Scenario | Output |
| ------- | ----- | ---- | -------- | ------ |
| createCohort(cohortName) | cohortName(@string) | | if a new name does not exist in the cohortList and if there is a cohort name given |  cohortList[{ name: 'Cohort 1', students: [ ] }] |
| searchCohort() | cohortName(@string) | | if cohort name exists in the cohort list | return cohort being searched otherwise throw error 'Cohort not found' |
| addStudent(@student, cohortName) | student(@objs), cohortName(@string) | student properties -> studentId: @number, firstName: @string, lastName: @string, userName: @string, email: @string | if student ID does not exist in the given cohorts student list and if students number is less than studentsList capacity | cohortList[{name: 'Cohort 1', students: id: 1, firstName: 'John, lastName: 'Doe'...}] |
| searchStudent(cohortName, studentID) | cohortName(@string), studentID(@number) | | if student is enrolled or if not | return student being searched or throw error 'Student not found |
| removeCohort(cohortName) | cohortName(@string) | | if cohort name found in the cohort list - ('Cohort 1') | cohortList['Cohort 1', 'Cohort 2'] === cohortList['Cohort 2'] |
| removeStudent(cohortName, studentID) | cohortName(@string), studentID(@number) | | if student exists in the given cohort | students['John Doe', 'Dylan Woods'] === students['John Doe'] otherwise throw Error ('Student does not exist in this cohort") |



