| Class: Manager                                |
| --------------------------------------------- |
| **Attributes:**                               |
| - cohorts: Cohort[]                           |
|                                               |
| **Methods:**                                  |
| + `addCohort(cohort)`                         |
| + `deleteCohort(name)`                        |
| + `getCohort(name)`                           |
|                                               |
| Class: Cohort                                 |
| --------------------------------------------- |
| **Attributes:**                               |
| - `NameOfCohort: string`                      |
| - `students: Student[]`                       |
|                                               |
| **Methods:**                                  |
| + `addStudent(student)`                       |
| + `deleteStudent(id)`                         |
| + `getCohortByName()`                         |
|                                               |
| Class: Student                                |
| --------------------------------------------- |
| **Attributes:**                               |
| - `firstName: string`                         |
| - `lastName: string`                          |
| - `gitHubUser: string`                        |
| - `email: string`                             |
| - `studentId: string`                         |
|                                               |
| **Relationships:**                            |
| - Manager has multiple Cohorts                |
| - Cohort has multiple Students                |
| - Cohort and Student are associated           |
| through methods for adding and                |
| deleting students from a cohort               |
