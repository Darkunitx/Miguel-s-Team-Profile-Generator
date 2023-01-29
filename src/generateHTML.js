const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const manager = require('../lib/manager.js');

function ManagerInfo(managerData) {

    return `<li class="list-group-item"> Name: ${managerData.managerInfo.name}</li>
    <li class="list-group-item"> ID: ${managerData.managerInfo.id}</li>
    <li class="list-group-item"> Email: <a href="mailto:${managerData.managerInfo.email}">${managerData.managerInfo.email}</a></li>
    <li class="list-group-item"> Office Number: ${managerData.managerInfo.Officenumber}</li>`
}

function engineerInfo(engineerData) {
    let engineerCard = '';
    for (let i = 0; i < engineerData.length; i++) {
        engineerCard += `<li class="list-group-item"> Name: ${engineerData[i].name}</li>
        <li class="list-group-item"> ID: ${engineerData[i].id}</li>
        <li class="list-group-item"> Email: <a href="mailto:${engineerData[i].email}">${engineerData[i].email}</a></li>
        <li class="list-group-item"> Github: <a href="https://github.com/${engineerData[i].github}" target="_blank" rel="noopener noreferrer">${engineerData[i].github}</a></li>`
    }   
    return engineerCard
}

function internInfo(internData) {
    let internCard = '';
    for (let i = 0; i < internData.length; i++) {
   internCard += `<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Name: ${internData[i].name}</li>
    <li class="list-group-item"> ID: ${internData[i].id}</li>
    <li class="list-group-item"> Email: <a href="mailto:${internData[i].email}">${internData[i].email}</a></li>
    <li class="list-group-item"> School: ${internData[i].school}</li>`
    }
    return internCard
}

function generateHTML(data) {
    console.log(data);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
  <h1> <li class="list-group-item"> DREAM TEAM </li> </h1>
${ManagerInfo(data)}


${engineerInfo(data.engineerInfo)}



${internInfo(data.internInfo)}
</ul>
</div>
    <script src="./index.js"></script>
</body>
</html>`
};

module.exports = generateHTML;