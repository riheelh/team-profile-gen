const fs = require('fs');






//function with HTML body
function generateHTML(teamArray) {
    return fs.writeFileSync('team.html', 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Team Profile</title>
</head>
<body>

<header>
<nav>
  <div class="nav-wrapper blue-grey darken-3 z-depth-3">
    <a href="#" class="brand-logo">My Team Profile</a>
  </div>
</nav>
</header>

<div class="container>
    <div class="row">
    <div class="col s12 m6">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">${teamArray[0].name}</span>
            <p>${teamArray[0].email}</p>
        </div>
    </div>
    </div>
    </div>
</div>
</body>
</html>` 
)
}


module.exports = generateHTML;