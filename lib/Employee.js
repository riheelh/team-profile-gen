class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}



let Eren =  new Employee('Eren', 04, 'eren@domain.com')
// console.log(Eren.getRole())
module.exports = Employee;