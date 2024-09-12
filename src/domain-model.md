## Create a cohort with a cohort name 
NOUN
Cohort
Name

VERB
Create

| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager| id@int, cohorts@[[]]| createCohort(@String)| Cohort name created | Valid name inputed | cohortName|createCohort('name' =>{'cohort 9'})

## Search for a cohort with a cohort name 
NOUN
Cohort
Name

VERB
Search

| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager | cohort@Array | searchCohort(@string)| searchFor a specific cohort| search for an existing cohort| found| searchCohort([cohortList],'cohortName') =>{
    cohortList.find((cohort) => cohort === cohortName)
}


## Add student to a specific cohort
NOUN
Student
cohort

VERB
Add

| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager | cohorts@[[]]| addStudent(@{})| add student to a specific cohort| new student can be added to any cohort|  New student successfully added| addStudent([cohortlist], cohort1, newStudent ) =>{
    cohortlist.find((cohort)=> cohort === 'cohort1').push(newStudent)
}


##  Remove a cohort by cohort name

NOUN
Cohort

VERB
Remove


| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager |  cohort@[]|  removeCohort(@[])| remove an exhisting cohort from the cohortList| Any cohort can be removed from the cohortList| Cohort Removed| removeCohort([cohortlist],  cohort2 ) =>{
    cohortlist.find((cohort)=> cohort === 'cohort2').slice('cohort2', 1)
}


## Remove student from a specific cohort
NOUN
Student
Cohort

VERB
Remove

| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager |  cohort@[]|  removeStudent( id@int, @[])| remove an exhisting student from a specific cohort| A student can be removed from a cohort| Student Removed| removeStudent( cohortList@[],'studentId' ) =>{
    cohortlist.map((cohort)=> cohort).find('student' => student.id !== studentId)
}


##  Throw errors if student or cohort not found
NOUN 
Student
Cohort

VERB
Throw


| Objects | Properties | Messages | Note | Scenerio | Output | Example
| --------| -----------| ---------| -----| ---------| ------|--------|
| CohortManager |  cohort@[], id@int, students{objects}|  add(@string)| Throw error if student or cohort not fund| Search for a valid student or cohort| No valid student or cohort found| throwError('student'/ 'cohort')=>{'expected}