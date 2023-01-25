 const inquirer = require('inquirer');
 const engineer = require('./lib/engineer');
 const intern = require('./lib/intern');
 const manager = require('./lib/manager');
 const fs = require('fs');

const generateHTML = ({ mgrName, EmployeeID, email, OfficeNumber, TeamMembers, engName, engID, engEmail, Github, intName, intID, intEmail, IntSchool }) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
${mgrName}
${EmployeeID}
${email}
${OfficeNumber}
${TeamMembers}
${engName}
${engID}
${engEmail}
${Github}
${intName}
${intID}
${intEmail}
${IntSchool}
     
    <script src="./index.js"></script>
</body>
</html>`
};

managerQuestions();

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
            additionalMember();
        });
    };

function additionalMember() {
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
            additionalEmployeeResponse = answers;
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an Engineer") {
                console.log('Sweet you are adding an engineer!');
                engineerQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an intern") {
                console.log('Sweet you are adding an intern!');
                internQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "No i do not wish to add any more members.") {
                console.log('Sounds great, team is full, no more members are being added!');
            }
            const HtmlPageContent = generateHTML(answers);

            fs.writeFile('index.html', HtmlPageContent, (err) =>
                err ? console.log(err) : console.log('.')

            );
        })
};

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
            {
                type: 'list',
                name: 'TeamMembers',
                message: 'Would you like to add a team Member to your Team Project?',
                choices: (['Yes i would like to add an Engineer', 'Yes i would like to add an intern', 'No i do not wish to add any more members.'])
            },
        ])
        .then((answers) => {
            additionalEmployeeResponse = answers;
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an Engineer") {
                console.log('Sweet you are adding an engineer!');
                engineerQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an intern") {
                console.log('Sweet you are adding an intern!');
                internQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "No i do not wish to add any more members.") {
                console.log('Sounds great, team is full, no more members are being added!');
            }
            const HtmlPageContent = generateHTML(answers);

            fs.writeFile('index.html', HtmlPageContent, (err) =>
                err ? console.log(err) : console.log('.')
                additionalMember();
            );
        })
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
            },
            {
                type: 'input',
                name: 'IntSchool',
                message: 'What School does the Intern attend?',
            },
            {
                type: 'list',
                name: 'TeamMembers',
                message: 'Would you like to add a team Member to your Team Project?',
                choices: (['Yes i would like to add an Engineer', 'Yes i would like to add an intern', 'No i do not wish to add any more members.'])
            },
        ])
        .then((answers) => {
            additionalEmployeeResponse = answers;
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an Engineer") {
                console.log('Sweet you are adding an engineer!');
                engineerQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "Yes i would like to add an intern") {
                console.log('Sweet you are adding an intern!');
                internQuestions();
            }
            if (additionalEmployeeResponse.TeamMembers === "No i do not wish to add any more members.") {
                console.log('Sounds great, team is full, no more members are being added!');
            }
            const HtmlPageContent = generateHTML(answers);

            fs.writeFile('index.html', HtmlPageContent, (err) =>
                err ? console.log(err) : console.log('.')
                additionalMember();
            );
        })
};
let arr = [];

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
               // fs.writeFile("sample.html", renderHtml(answer), (err) => {
                   console.log(arr)
               // } )
            })
        }


        function renderHtml(team) {
            return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
<p>${team.getRole()}</p>
<p>${intID}</p>
<p>${intEmail}</p>
</body>
</html>
`
};
internQuestions()