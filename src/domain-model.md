# Create a cohort with a cohort name

Noun
-Cohort
-Name
Verb
-Create
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | id@int ,cohorts@Array | create(@String) | cohort name created | valid name inputed | cohortname | `create('name') => {'cohort 11'}`

# Search for a cohort by cohort name

Noun
-Cohort
-Name
Verb
-Search
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | id@int ,cohorts@Array | search(@String) | search a cohort by cohort name | search with a valid name | cohortId and name | `search('name') => {'cohort 11'}`

# Add student to a specific cohort

Noun
-Student
-cohort
Verb
-Add
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | cohorts@array, id@int ,students{objects} | add(@String) | add students to a specific cohort | add valid students | valid students added | `add('students') => '{'id: 1, firstName: "Tınubu", lastName: "Buhari", githubUsername: "tınubu2019", e-mail: tınububuhari@yahoo.com}`

# Remove a cohort by cohort name

Noun
-Cohort
-Name
Verb
-Remove
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | id@int ,cohorts@Array | remove(@String) | cohort will be removed with name | valid name inputed | cohortname | `remove('name') => {'cohort 5'}`

# Remove student from a specific cohort

Noun
-Student
-cohort
Verb
-Remove
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | cohorts@array, id@int ,students{objects} | add(@String) | remove students from a specific cohort by name| add valid students | valid student removed | `remove('student') => '{'expected'}`

# Throw errors if student or cohort not found

Noun
-Student
-cohort
Verb
-Remove
| Objects | Properties | Messages | Notes | Scenario | Output | Example |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| CohortManager | cohorts@array, id@int ,students{objects} | add(@String) | Throw errors if student or cohort not found| search valid student or cohort | valid student not found | `throw error('student/cohort') => '{'expected'}`
