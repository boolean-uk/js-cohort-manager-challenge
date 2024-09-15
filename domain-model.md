# Domain Model

## Standard Requirements

- **Create Cohort**
  - Method: `createCohort(cohortName)`
  - Input: `cohortName` (string)
  - Output: New cohort in the cohortList if the name is unique; otherwise, throw an error.

- **Search Cohort**
  - Method: `searchCohort(cohortName)`
  - Input: `cohortName` (string)
  - Output: Return the cohort if found; otherwise, throw an error.

- **Add Student**
  - Method: `addStudent(student, cohortName)`
  - Input: `student` (object with properties), `cohortName` (string)
  - Output: Updated cohort list with added student if conditions are met; otherwise, throw an error.

- **Remove Cohort**
  - Method: `removeCohort(cohortName)`
  - Input: `cohortName` (string)
  - Output: Updated cohort list without the removed cohort if found; otherwise, throw an error.

- **Remove Student**
  - Method: `removeStudent(cohortName, studentID)`
  - Input: `cohortName` (string), `studentID` (number)
  - Output: Updated student list in the cohort without the removed student if conditions are met; otherwise, throw an error.

- **Error Handling**
  - Throw errors if student or cohort not found.

## Extensions

- **Search Student by ID**
  - Method: `searchStudent(cohortName, studentID)`
  - Input: `cohortName` (string), `studentID` (number)
  - Output: Return the student if found; otherwise, throw an error.

- **Cohort Capacity Limit**
  - Cohorts have a fixed capacity of 24 students. Adding students beyond the limit is not allowed.

- **Cohort Name Constraints**
  - Cohorts can't have the same name and can't exist without a name.

- **Single Cohort per Student**
  - The same student can't exist in multiple cohorts.

- **Error Prevention in Removing Students**
  - A student can't be removed from a cohort if not present.

- **Search Students by Name**
  - Method: `searchStudentsByName(firstName, lastName)`
  - Output: Return all matching students.










