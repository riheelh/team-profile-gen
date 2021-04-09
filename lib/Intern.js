const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){ 
        super(name, id, email)     
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}

let userOne = new Intern('ray', 09, 'ray@domain.com', 'washinton')
// console.log(userOne.getSchool(), userOne.getRole())
module.exports = Intern;