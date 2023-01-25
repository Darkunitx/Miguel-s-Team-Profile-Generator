 const inquirer = require('inquirer');
 const engineer = require('./lib/engineer');
 const intern = require('./lib/intern');
 const manager = require('./lib/manager');
 const employee = require('./lib/employee');
 const fs = require('fs');
 const generateHTML = require('./src/generateHTML');

managerQuestions();

let holdingCell = {
    managerInfo: [],
    internInfo: [],
    engineerInfo: []
};

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
            holdingCell.managerInfo = answers;
            additionalMember();
        });
    };

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
                }
            ])
            .then(answer => {
                arr.push(answer)
                   console.log(arr)
            })
        }