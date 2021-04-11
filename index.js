const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlBuilder = require('./src/page-template');
var teamArray = [];

//create function to generate the Manager data
function managerConst(data) {
    var ManagerData = new Manager(data.name, data.id, data.email, data.officeNumber)
    // ManagerData["role"] = ManagerData.getRole()
    return ManagerData
}

//create function to generate the Engineer data
function engineerConst(data) {
    var EngineerData = new Engineer(data.name, data.id, data.email, data.github)
    return EngineerData
}

//create function to generate the Intern data
function internConst(data) {
    var InternData = new Intern(data.name, data.id, data.email, data.school)
    return InternData
}

const init = () => {
    inquirer
    .prompt([
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
        {
            type: 'list',
            message: `choose your team member?`,
            name: 'choose',
            choices: ["Engineer", "Intern","Exit"],
        },
    ])
    .then((data) => {
        
        var managerName = managerConst(data)
        teamArray.push(managerName)
        console.log(teamArray)
        


        if(data.choose === "Exit"){
            return htmlBuilder(teamArray)
            
            // console.log(teamArray[0].name, teamArray[0].email, teamArray[0].officeNumber );

        } else if(data.choose ==="Engineer") {
            return getEngineer();
        } else if(data.choose ==="Intern") {
            return getIntern();
        }  
    })
    .catch((err) => console.error(err));
}


const getEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the Engineer's name ?`,
            name: 'name',
        },
        {
            type: 'number',
            message: `What is the Engineer's employee ID ?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Engineer's email address ?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Engineer's github address ?`,
            name: 'github',
        },
        {
            type: 'list',
            message: `choose your team member?`,
            name: 'choose',
            choices: ["Engineer", "Intern","Exit"],
        }, 

    ])
    .then((data) => {
        var engineerName = engineerConst(data)
        teamArray.push(engineerName)
        console.log(teamArray)
        if(data.choose === "Exit"){
            return htmlBuilder(teamArray);
        } else if(data.choose ==="Engineer") {
            return getEngineer();
        } else if(data.choose ==="Intern") {
            return getIntern();
        }

    })
    .catch((err) => console.error(err));
}

const getIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the Intern's name ?`,
            name: 'name',
        },
        {
            type: 'number',
            message: `What is the Intern's employee ID ?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Intern's email address ?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Intern's school name ?`,
            name: 'school',
        },
        {
            type: 'list',
            message: `choose your team member?`,
            name: 'choose',
            choices: ["Engineer", "Intern","Exit"],
        }, 

    ])
    .then((data) => {
        var internName = internConst(data)
        teamArray.push(internName)
        console.log(teamArray)
        if(data.choose === "Exit"){
            return htmlBuilder(teamArray);
        } else if(data.choose ==="Engineer") {
            return getEngineer();
        } else if(data.choose ==="Intern") {
            return getIntern();
        }

    })
    .catch((err) => console.error(err));
}


//start the app
init();