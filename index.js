// Create file structure                           DONE
// create system architecture of classes and subclass extensions 
// import inguirer and jest                                DONE
// create prompts for employee information for entire team (only exit when no more employees to add)
// generate HTML file based on employee information
// create styling for generated html
// create tests for value passing within classes and for the operations performed

const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer,js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const managerQuestions = [
    {
        type: 'input',
        message: 'Manager Name:',
        name: 'Manager.this.name'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'Manager.this.id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'Manager.this.email',
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'Manager.this.officeNumber',
    }
]

const employeeQuestion = [
    {
        type: 'list',
        message: 'Would you like to add anyone else?',
        name: 'employees',
        choices: ["Add an Eningeer","Add an Intern","Finished building my team"]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'Engineer.this.name'
    },
    {
        type: 'input',
        message: 'Engineer ID:',
        name: 'Engineer.this.id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'Engineer.this.email',
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'Engineer.this.github',
    }
]


const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'Intern.this.name'
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'Intern.this.id',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'Intern.this.email',
    },
    {
        type: 'input',
        message: 'Name of School:',
        name: 'Intern.this.school',
    }
]

function writeHtml(filename,data){
    fs.writeFile(`${filename}`,data.(err) =>
    err ? console.log(err) : console.log("Successfully Created HTML File!")
    )
}

function questionOrder(){
    inquirer
        .prompt(managerQuestions)
        
}