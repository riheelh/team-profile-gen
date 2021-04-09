const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){ 
        super(name, id, email)   
        this.officeNumber = officeNumber
    }
    getofficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

let userOne = new Manager('ray', 09, 'ray@domain.com', '077013000')

console.log(userOne.getofficeNumber(), userOne.getRole())
module.exports = Manager;