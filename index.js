const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager.js');

let holdingCell = {
    managerInfo: [], internInfo: [], engineerInfo: []
};

// accept input from user
// generate specific card HTML (dynamically)

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is the name of the Manager of this project?',
            },
            {
                type: 'input',
                name: 'EmployeeID',
                message: 'What is your employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'What is your Office Number?',
            }
        ])
        .then((answers) => {
            const newManager = new manager(answers.mgrName, answers.EmployeeID, answers.email, answers.OfficeNumber);
            holdingCell.managerInfo = newManager;
            nextEmployee();
        });
};

function nextEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'TeamMembers',
                message: 'Would you like to add a team Member to your Team Project?',
                choices: (['Yes i would like to add an Engineer', 'Yes i would like to add an intern', 'No i do not wish to add any more members.'])
            }
        ])
        .then((answers) => {
            // const nextEmployee = answers;
            if (answers.TeamMembers === "Yes i would like to add an Engineer") {
                console.log('Sweet you are adding an engineer!');
                engineerQuestions();
            }
            if (answers.TeamMembers === "Yes i would like to add an intern") {
                console.log('Sweet you are adding an intern!');
                internQuestions();
            }
            if (answers.TeamMembers === "No i do not wish to add any more members.") {
                console.log('Sounds great, team is full, no more members are being added!');
                createHTML();
            }
        })
}


function internQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'intName',
                message: 'What is the name of the Intern?',
            },
            {
                type: 'input',
                name: 'intID',
                message: 'What is the Interns ID?',
            },
            {
                type: 'input',
                name: 'intEmail',
                message: 'What is the Interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns school?',
            }
        ])
        .then((answers) => {
            const newIntern = new intern(answers.intName, answers.intID, answers.intEmail, answers.school);
            holdingCell.internInfo.push(newIntern);
            nextEmployee();
        });
}

function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engName',
                message: 'What is the name of the Engineer?',
            },
            {
                type: 'input',
                name: 'engID',
                message: 'What is the Engineers employee ID?',
            },
            {
                type: 'input',
                name: 'engEmail',
                message: 'What is the Engineers email?',
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is the engineers Github?',
            },
        ])
        .then((answers) => {
            const newEngineer = new engineer(answers.engName, answers.engID, answers.engEmail, answers.Github);
            holdingCell.engineerInfo.push(newEngineer);
            nextEmployee();
        });
}

console.log(holdingCell);

function createHTML() {
    fs.writeFile('sample.html', generateHTML(holdingCell), (err) =>
        err ? console.log(err) : console.log('.')
    );
}

managerQuestions();

