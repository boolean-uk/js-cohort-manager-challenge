# Domain Model

## Methods

- `Cohort.addStudent(student)`
- `Cohort.removeStudentByName(studentFirstName)`
- `Manager.addCohort(cohort)`
- `Manager.removeCohortByName(name)`
- `Manager.findCohortByName(name)`

## Inputs

- `addStudent`: A `Student` object.
- `removeStudentByName`: `studentFirstName` (String).
- `addCohort`: A `Cohort` object.
- `removeCohortByName`: `name` (String).
- `findCohortByName`: `name` (String).

## Scenarios

- `addStudent`: Adding a new student to a cohort.
- `removeStudentByName`: Removing a student by their first name from a cohort.
- `addCohort`: Adding a new cohort.
- `removeCohortByName`: Removing a cohort by its name.
- `findCohortByName`: Finding a cohort by its name.

## Output

- `addStudent`: Cohort's student list updated.
- `removeStudentByName`: Updated student list or error if student does not exist.
- `addCohort`: Updated list of cohorts.
- `removeCohortByName`: Updated cohort list or error if cohort does not exist.
- `findCohortByName`: Returns the found cohort or throws an error if it does not exist.

## Data

- `Cohort`: Contains `students` array and `CohortName`.
- `Student`: Contains `firstName`, `lastName`, `gitUser`, `email`, `studentId`.
- `Manager`: Contains `cohorts` array.
