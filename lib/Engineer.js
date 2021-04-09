const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){ 
        super(name, id, email)     
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}

let userOne = new Engineer('ray', 09, 'ray@domain.com', 'riheelh')
// console.log(userOne.getGithub(), userOne.getRole())

module.exports = Engineer;