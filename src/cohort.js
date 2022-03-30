class Cohort {
  constructor(num) {
    this.num = num;
    this.students = [];
  }

  add(newStudent) {
    this.students.push(newStudent);
    return `You've added ${newStudent.fullName} to Cohort ${this.num}`;
  }

  remove(name) {
    for (let i = 0; i < this.students.length; i++) {
      const studentName = this.students[i].fullName;
      if (studentName === name) {
        return this.students.filter(
          (studentProfile) => studentProfile.fullName !== name
        );
      }
    }
    return "ERROR – this student do not exist";
  }
}

module.exports = Cohort;
