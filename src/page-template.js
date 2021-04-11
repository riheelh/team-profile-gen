const fs = require('fs');


 
 

//function with HTML body
function generateHTML(teamArray) {

 


    function MangerCard(teamArray) { 
        return `
            <div class="col s4 m4">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${teamArray[0].name}</span>
                        <p> Role: Manager </p>
                        <p>ID : ${teamArray[0].id}</p>
                        <p>Email: ${teamArray[0].email}</p>
                        <p>Number: ${teamArray[0].officeNumber}</p>       
                    </div>
                </div>
            </div>`  
        }
        
        function teamCard(teamArray) {
            let card=''; 
                for( let i = 1; i < teamArray.length ; i++) {
                    // console.log(teamArray[i])
                    if(teamArray[i].role == "Engineer") {
                card += `
                <div class="col s4 m4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${teamArray[i].name}</span>
                            <p> Role: ${teamArray[i].role}  </p>
                            <p>ID : ${teamArray[i].id}</p>
                            <p>Email: ${teamArray[i].email}</p>
                            <p>Github: ${teamArray[i].github}</p>
                            
                        </div>
                    </div>
                </div>`
                    }  else  {
                card += `
                <div class="col s4 m4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${teamArray[i].name}</span>
                            <p> Role: ${teamArray[i].role}   </p>
                            <p>ID : ${teamArray[i].id}</p>
                            <p>Email: ${teamArray[i].email}</p>
                            <p>School: ${teamArray[i].school}</p>
                            
                        </div>
                    </div>
                </div>`
                                }         
                }
            return card
        }
    
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
<div class="container">
        <div class="row">

      

        ${MangerCard(teamArray)}

        </div>
        <div class="row">

        ${teamCard(teamArray)}

        </div>
</div>
</body>
</html>` 
)
}


module.exports = generateHTML;