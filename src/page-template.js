const fs = require('fs');

//function to generate HTML page
function generateHTML(teamArray) {
    //function to create manager card
    function MangerCard(teamArray) { 
        return `
            <div class="col s4 m4 push-m4 s4">
                <div class="card grey lighten-4" style="padding: 1rem;">
                    <ul class="collection with-header ">
                        <li class="collection-header teal lighten-1 white-text"><h4>${teamArray[0].getName()} <i class="fab fa-jenkins" style="margin-right: 1rem; margin-left: 1rem;"></i></h4></li>
                        <li class="collection-item"><strong>Role: </strong>${teamArray[0].getRole()}</li>
                        <li class="collection-item"><strong>ID: </strong>${teamArray[0].getId()}</li>
                        <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[0].getEmail()}">${teamArray[0].email}</a></li>
                        <li class="collection-item"><strong>Number: </strong>${teamArray[0].getofficeNumber()}</li>
                    </ul> 
                </div>    
            </div>`  
        }
     //function to create team members cards   
    function teamCard(teamArray) {
        let card=''; 
            for( let i = 1; i < teamArray.length ; i++) {
                if(teamArray[i].getRole() == "Engineer") {
            card += `
            <div class="col s4 m4">
                <div class="card grey lighten-4" style="padding: 1rem;">
                    <ul class="collection with-header ">
                        <li class="collection-header teal lighten-1 white-text"><h4>${teamArray[i].getName()} <i class="fas fa-cogs" style="margin-right: 1rem; margin-left: 1rem;"></i> </h4></li>
                        <li class="collection-item"><strong>Role: </strong>${teamArray[i].getRole()}</li>
                        <li class="collection-item"><strong>ID: </strong>${teamArray[i].getId()}</li>
                        <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
                        <li class="collection-item"><strong>Github: </strong><a href="https://github.com/${teamArray[i].getGithub()}" target="_blank">${teamArray[i].getGithub()}</a></li>
                    </ul> 
                </div>    
            </div>
            `
                }  else  {
            card += `                
            <div class="col s4 m4">
                <div class="card grey lighten-4" style="padding: 1rem;">
                    <ul class="collection with-header ">
                        <li class="collection-header teal lighten-1 white-text"><h4>${teamArray[i].getName()} <i class="fas fa-graduation-cap" style="margin-right: 1rem; margin-left: 1rem;"></i></h4></li>
                        <li class="collection-item"><strong>Role: </strong>${teamArray[i].getRole()}</li>
                        <li class="collection-item"><strong>ID: </strong>${teamArray[i].getId()}</li>
                        <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
                        <li class="collection-item"><strong>School: </strong>${teamArray[i].getSchool()}</li>
                    </ul> 
                </div>    
            </div>    
            `
                            }         
            }
        return card
    }
    
    //output and write to the html file
    return fs.writeFileSync(`./dist/team.html`, 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <title>Team Profile</title>
</head>
<body style="background-color: #dee6e9">

<header>
<nav style="margin-bottom: 2rem;">
  <div class="nav-wrapper teal darken-1 z-depth-3">
    <a href="#" class="brand-logo center"> M y-T E A M</a>
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