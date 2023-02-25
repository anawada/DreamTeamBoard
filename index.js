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

// startProgram()
// async function startProgram(){
// createEmployee();

team.push(new Manager("Andrew", 1, "test.com"));

let htmlDoc = render(team);



// const response = await inquirer 
function createEmployee(){
    inquirer.prompt([
        {
            name: 'managerName',
            message: "Manager Name",
            type: 'input',
        },
        {
            name: 'employeeId',
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
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add a team member?',
            when: function(answers) {
                return !answers.addTeamMember;
            }
        },
        {
            type: 'input',
            name: 'teamMemberRole',
            message: 'What is the team member Role? Engineer or Intern?',
            when(answers) {
                return answers.addTeamMember;
            }
        },

    ])

    // team.push(new Manager("Andrew", 1, "test.com"));
}

// function to write HTML file
await fs.writeFile(outputPath, htmlDoc);