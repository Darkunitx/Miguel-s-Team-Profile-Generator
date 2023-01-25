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
`}