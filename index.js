const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ mgrName, EmployeeID, email, OfficeNumber, TeamMembers}) =>

`<!DOCTYPE html>
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
     
    <script src="./index.js"></script>
</body>
</html>`;

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
      },
      {
      type: 'list',
      name: 'TeamMembers',
      message: 'Would you like to add a team Member to your Team Project?',
      choices: (['Yes i would like to add an Engineer', 'Yes i would like to add an intern', 'No i do not wish to add any more members.'])
    },
])
.then((answers) => {
  const HtmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', HtmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created HTML!')
  );
});