/* eslint-disable prettier/prettier */

let count = 1

class Student {

    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.id = this.incremenentId()
    };

    incremenentId() {
       return count++
    }

};

export default Student;
