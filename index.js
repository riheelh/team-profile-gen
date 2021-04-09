const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')


const questions = [
    {
        type: 'input',
        message: `What is the Manager's name ?`,
        name: 'name',
    },
    {
        type: 'number',
        message: `What is the Manager's employee ID ?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the Manager's email address ?`,
        name: 'email',
    },
    {
        type: 'number',
        message: `What is the Manager's office number ?`,
        name: 'officeNumber',
    },
]

// somthing is wrong here

//create function to generate the Manager data
function Mconstructer(data) {
    var ManagerData = new Manager(data.name, data.id, data.email, data.officeNumber)
    return ManagerData
}
//create function to generate the Engineer data
function Econstructer(data) {
    var EngineerData = new Manager(data.name, data.id, data.email, data.github)
    return EngineerData
}
//create function to generate the Intern data
function Iconstructer(data) {
    var InternData = new Manager(data.name, data.id, data.email, data.school)
    return EngineerData
}

//an array to store all generated objects

//function to write new html file that ingest data from the array 

const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        // console.log(data)
        console.log(Mconstructer(data))
    })
    .catch((err) => console.error(err));
}

// function validate(data) {
//     if(typeof data.id !== 'number') {
//       return console.log('You need to provide a number for ID');
//     }

// }


//start the app
init();