const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let team = [];


function main() {


// const response = await inquirer 
function createManager(){
    inquirer.prompt([
        {
            name: 'managerName',
            message: "Manager Name",
            type: 'input',
        },
        {
            name: 'managerId',
            message: "Employee ID",
            type: 'input',
        },
        {
            name: 'email',
            message: "Email address",
            type: 'input',
        },
        {
            name: 'officeNumber',
            message: "Office number",
            type: 'input',
        },

    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.email,
            answers.officeNumber
        );
        team.push(manager);

        buildTeam();
       
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            name: 'engineerName',
            message: "Engineer Name",
            type: 'input',
        },
        {
            name: 'engineerId',
            message: "Employee ID",
            type: 'input',
        },
        {
            name: 'email',
            message: "Email address",
            type: 'input',
        },

    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.email,
        );
        team.push(engineer);

        buildTeam();
       
    })
}

function createIntern(){
    inquirer.prompt([
        {
            name: 'internName',
            message: "Intern Name",
            type: 'input',
        },
        {
            name: 'internId',
            message: "Employee ID",
            type: 'input',
        },
        {
            name: 'email',
            message: "Email address",
            type: 'input',
        },

    ])
    .then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.email,
        );
        team.push(intern);

        buildTeam();
       
    })
}

function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: "What team member you wold like to add?",
            choices: ["Engineer", "Intern", "I Don't need to add"],
           
        }
    ])
    .then((userOption) => {
        switch (userOption.teamMember) {
            case "Engineer": 
                createEngineer();
                break;
            case "Intern": 
                createIntern();
                break;
            default:
                createTeam();
        }
    })
}

function createTeam() {
    fs.writeFileSync(outputPath, render(team), "UTF-8")
}


createManager();
};

main();
