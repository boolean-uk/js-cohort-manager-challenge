# Cohort Manager

## Creating and deleting cohorts

```
As a user
So I can start a cohort
I'd like to create a cohort by name
```

```
As a user
So I can finish a cohort
I'd like to delete a cohort by name
```

### Keywords

1. **Verbs:** start, create
2. **Nouns:** user, cohort, name

### Table

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| createCohort(cohortName) | cohortName(@String) | create the cohort if it doesn't exist | true
| deleteCohort(cohortName) | cohortName(@String) | delete the cohort if it exists | true

## Searching the cohort

```
As a user
So I can find a cohort
I'd like to search for a cohort by name
```

### Keywords

1. **Verbs:** find, search
2. **Nouns:** cohort, name

### Table

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| searchByCohortName(cohortName) | cohortName(@String) | If cohort name is in array, return cohort | true

## 

```
As a user
So I can add a student to a cohort
I'd like to add a student by name
```

```
As a user
So I can remove a student from a cohort
I'd like to remove a student by name
```

### Keywords

1. **Verbs:** add, remove
2. **Nouns:** student, cohort, name

### Table

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| addStudent(githubUsername) | studentUsername(@String) | add student to cohort if the username doesn't already exist | true
| removeStudent(githubUsername) | studentUsername(@String) | remove student from cohort if the username doesn't already exist | true