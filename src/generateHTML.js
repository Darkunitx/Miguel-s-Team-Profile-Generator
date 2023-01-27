const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const manager = require('../lib/manager.js');


function generateHTML(data) {
    console.log(data);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
    ${data.managerInfo.name}
     
    <script src="./index.js"></script>
</body>
</html>`
};

module.exports = generateHTML;