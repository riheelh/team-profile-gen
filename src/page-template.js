const fs = require('fs');


 
 

//function with HTML body
function generateHTML(teamArray) {

 


    function MangerCard(teamArray) { 
        return `
            <div class="col s4 m4 push-m4 s4">
                <div class="card grey lighten-4" style="padding: 1rem;">
                    <ul class="collection with-header ">
                        <li class="collection-header teal white-text"><h4>${teamArray[0].name}</h4></li>
                        <li class="collection-item"><strong>Role: </strong>${teamArray[0].role}</li>
                        <li class="collection-item"><strong>ID: </strong>${teamArray[0].id}</li>
                        <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[0].email}">${teamArray[0].email}</a></li>
                        <li class="collection-item"><strong>Number: </strong>${teamArray[0].officeNumber}</li>
                    </ul> 
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
                    <div class="card grey lighten-4" style="padding: 1rem;">
                        <ul class="collection with-header ">
                            <li class="collection-header teal lighten-1 white-text"><h4>${teamArray[i].name}</h4></li>
                            <li class="collection-item"><strong>Role: </strong>${teamArray[i].role}</li>
                            <li class="collection-item"><strong>ID: </strong>${teamArray[i].id}</li>
                            <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                            <li class="collection-item"><strong>Github: </strong><a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></li>
                        </ul> 
                    </div>    
                </div>
                `
                    }  else  {
                card += `                
                <div class="col s4 m4">
                    <div class="card grey lighten-4" style="padding: 1rem;">
                        <ul class="collection with-header ">
                            <li class="collection-header teal lighten-1 white-text"><h4>${teamArray[i].name}</h4></li>
                            <li class="collection-item"><strong>Role: </strong>${teamArray[i].role}</li>
                            <li class="collection-item"><strong>ID: </strong>${teamArray[i].id}</li>
                            <li class="collection-item"><strong>Email: </strong><a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                            <li class="collection-item"><strong>School: </strong>${teamArray[i].school}</li>
                        </ul> 
                    </div>    
                </div>    
                `
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
<body style="background-color: #dee6e9">

<header>
<nav style="margin-bottom: 2rem;">
  <div class="nav-wrapper teal darken-1 z-depth-3">
    <a href="#" class="brand-logo center">T E A M Memebers</a>
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