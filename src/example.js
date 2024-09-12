const cohortList = [
  {
    name: 'cohort1',
    students: [
      { id: 1, name: 'Tayo', age: 23 },
      { id: 2, name: 'Eazy', age: 22 },
      { id: 3, name: 'Tosin', age: 38 }
    ]
  },
  {
    name: 'cohort2',
    students: [
      { id: 1, name: 'William', age: 23 },
      { id: 2, name: 'Mark', age: 22 },
      { id: 3, name: 'Seyi', age: 38 }
    ]
  },
  {
    name: 'cohort3',
    students: [
      { id: 1, name: 'Damilola', age: 23 },
      { id: 2, name: 'Segun', age: 56 },
      { id: 3, name: 'Ope', age: 32 }
    ]
  }
]

console.log(cohortList)
/* const removeStudent = (cohortList, cohortName, studentId) => {
    const cohort = cohortList.find(cohort => cohort.name === cohortName);

    if (cohort) {
        cohort.students = cohort.students.filter(student => student.id !== studentId);
    }

    return cohortList;
};

const updatedCohortList = removeStudent(cohortList, 'cohort1', 1);
console.log(updatedCohortList);
 */
