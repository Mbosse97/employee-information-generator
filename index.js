// Create file structure                           DONE
// create system architecture of classes and subclass extensions         DONE
// import inguirer and jest                                DONE
// create prompts for employee information for entire team (only exit when no more employees to add)      DONE
// generate HTML file based on employee information          DONE
// create styling for generated html                DONE
// create tests for value passing within classes and for the operations performed       DONE

const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const {bootstrap,
	header,
	bodyTop, 
    footer } = require("./lib/html.js");


const managerQuestions = [
    {
        type: 'input',
        message: 'Manager Name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'officeNumber',
    }
]

const employeeQuestion = [
    {
        type: 'list',
        message: 'Would you like to add anyone else?',
        choices: ["Add an Engineer","Add an Intern","Finished building my team"],
        name: "employees"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Engineer ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'github',
    }
]


const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Name of School:',
        name: 'school',
    }
]


manager = [];
interns = [];
engineers = [];

let html = header + bodyTop;

async function questionOrder(){
    await inquirer.prompt(managerQuestions)
    .then ((info) => {
        manager.push (new Manager(info.name, info.id, info.email, info.officeNumber));
        html + manager
    })
    response = await inquirer.prompt(employeeQuestion);
    while (response.employees === 'Add an Engineer' || response.employees === 'Add an Intern') {
        if (response.employees === 'Finished building my team') break;
        switch(response.employees) {
        case 'Add an Intern':
            questions = internQuestions;
            break;
        case 'Add an Engineer':
            questions = engineerQuestions;
            break;
        }
        
        await inquirer.prompt(questions)
            .then((info) => {
                switch(response.employees) {
                    case 'Add an Intern':
                        interns.push( new Intern(info.name, info.id, info.email, info.school));
                    break;
                    case 'Add an Engineer':
                        engineers.push( new Engineer(info.name, info.id, info.email, info.github));
                    break;
                }
            })
        response = await inquirer.prompt(employeeQuestion)

    }

    html += manager.map((Manager) => Manager.getCard()).join("")
    + engineers.map((Engineer) => Engineer.getCard()).join("")
    + interns.map((Intern) => Intern.getCard()).join("")

    return html;
}

function writeHtml(html) {
    fs.writeFile("./dist/index.html", html, (err) =>
      err ? console.log(err) : console.log("HTML file written!")
    );
    return 0;
  }

async function init() {
    writeHtml(await questionOrder());
    return 0;
}

init();
