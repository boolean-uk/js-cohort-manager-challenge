import CohortList from './index.js'

const addCohortForm = document.querySelector('.add-cohort-form')
const addCohortInput = document.querySelector('#add-cohort-input')
const selectCohortDiv = document.querySelector('.select-cohort-container')
const addStudentForm = document.querySelector('.add-student-form')
const selectCohort = document.querySelector('.select-cohort')
const addFirstNameInput = document.querySelector('#first-name-input')
const addLastNameInput = document.querySelector('#last-name-input')
const addUsernameInput = document.querySelector('#username-input')
const addEmailInput = document.querySelector('#email-input')
const studentsUl = document.querySelector('.students-ul')
const removeCohortForm = document.querySelector('.remove-cohort-form')

let cohortInput = ''
let selectedCohort = ''
let removeCohort = ''

const cohortList = new CohortList()

function handleAddCohort() {
  addCohortForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cohortName = addCohortInput.value

    cohortList.addCohort(cohortName)
    renderCohortSelect()
    renderCohortSelectForm()
    renderRemoveCohortForm()
  })
}

function renderCohortSelect() {
  selectCohortDiv.innerHTML = ''

  const label = document.createElement('label')
  const select = document.createElement('select')

  label.innerText = 'Select Cohort'

  const defaultOption = document.createElement('option')
  defaultOption.innerText = '--Select cohort--'
  select.append(defaultOption)

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  selectCohortDiv.append(label)
  selectCohortDiv.append(select)

  select.addEventListener('change', () => {
    selectedCohort = select.value
    renderStudents()
  })
}

function renderCohortSelectForm() {
  selectCohort.innerHTML = ''

  const labelSelect = document.createElement('label')
  const select = document.createElement('select')

  labelSelect.innerText = 'Select Cohort'

  const defaultOption = document.createElement('option')
  defaultOption.innerText = '--Select cohort--'
  select.append(defaultOption)

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  selectCohort.append(labelSelect)
  selectCohort.append(select)

  select.addEventListener('change', () => {
    cohortInput = select.value
  })
}

function handleAddStudent() {
  addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    cohortList.addStudent(
      cohortInput,
      addFirstNameInput.value,
      addLastNameInput.value,
      addUsernameInput.value,
      addEmailInput.value
    )
    renderCohortSelect()
    renderCohortSelectForm()
    renderStudents()
  })
}

function renderStudents() {
  studentsUl.innerHTML = ''

  const foundCohort = cohortList.cohorts.find(
    (cohort) => cohort.cohortName === selectedCohort
  )

  if (foundCohort) {
    foundCohort.students.forEach((student) => {
      const li = document.createElement('li')
      li.innerText = `${student.firstName} ${student.lastName}`

      const deleteButton = document.createElement('button')
      deleteButton.innerText = 'Delete'

      li.append(deleteButton)

      studentsUl.append(li)

      deleteButton.addEventListener('click', () => {
        cohortList.removeStudent(foundCohort.cohortName, student.studentID)
        renderStudents()
      })
    })
  }
}

function renderRemoveCohortForm() {
  removeCohortForm.innerHTML = ''

  const label = document.createElement('label')
  const select = document.createElement('select')
  const removeButton = document.createElement('button')

  label.innerText = 'Select Cohort'
  removeButton.innerText = 'Remove'

  const defaultOption = document.createElement('option')
  defaultOption.innerText = '--Select cohort--'
  select.append(defaultOption)

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  removeCohortForm.append(label)
  removeCohortForm.append(select)
  removeCohortForm.append(removeButton)

  select.addEventListener('change', () => {
    removeCohort = select.value
  })
}

function handleRemoveCohort() {
  removeCohortForm.addEventListener('submit', (e) => {
    e.preventDefault()

    cohortList.removeCohort(removeCohort)

    renderCohortSelect()
    renderCohortSelectForm()
    renderRemoveCohortForm()
  })
}

renderCohortSelectForm()
handleAddCohort()
renderCohortSelect()
handleAddStudent()
renderStudents()
renderRemoveCohortForm()
handleRemoveCohort()
