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



// let Baska =  new Employee('Baska', 04, 'eren@domain.com')
// console.log(Baska.getRole())
module.exports = Employee;