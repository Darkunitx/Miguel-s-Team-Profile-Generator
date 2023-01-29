const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager.js');

let holdingCell = {
    managerInfo: [], internInfo: [], engineerInfo: []
};


function managerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is the name of the Manager of this project?',
                validate: managerValue => {
                    if (managerValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'EmployeeID',
                message: 'What is your employee ID?',
                validate: managerValue => {
                    if (managerValue) { return true;} else { console.log("Not a Number"); return false;}
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: managerValue => {
                    if (managerValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'What is your Office Number?',
                validate: managerValue => {
                    if (managerValue) { return true;} else { console.log("Not a Number"); return false;}
                }
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
                validate: internValue => {
                    if (internValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'intID',
                message: 'What is the Interns ID?',
                validate: internValue => {
                    if (internValue) { return true;} else { console.log("Not a Number"); return false;}
                }
            },
            {
                type: 'input',
                name: 'intEmail',
                message: 'What is the Interns email?',
                validate: internValue => {
                    if (internValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns school?',
                validate: internValue => {
                    if (internValue) { return true;} else { console.log("Not a string"); return false;}
                }
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
                validate: engineerValue => {
                    if (engineerValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'engID',
                message: 'What is the Engineers employee ID?',
                validate: engineerValue => {
                    if (engineerValue) { return true;} else { console.log("Not a Number"); return false;}
                }
            },
            {
                type: 'input',
                name: 'engEmail',
                message: 'What is the Engineers email?',
                validate: engineerValue => {
                    if (engineerValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is the engineers Github?',
                validate: engineerValue => {
                    if (engineerValue) { return true;} else { console.log("Not a string"); return false;}
                }
            },
        ])
        .then((answers) => {
            const newEngineer = new engineer(answers.engName, answers.engID, answers.engEmail, answers.Github);
            holdingCell.engineerInfo.push(newEngineer);
            nextEmployee();
        });
}

function createHTML() {
    fs.writeFile('sample.html', generateHTML(holdingCell), (err) =>
        err ? console.log(err) : console.log('.')
    );
}

managerQuestions();

