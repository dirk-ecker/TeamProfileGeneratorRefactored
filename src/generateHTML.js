const createOfficeNumber = ({ number }) => number ? `<li class="list-group-item">Office Number: ${number}</li>` : ''

const createGithubLink = ({ github }) => github ? `<li class="list-group-item">
                                                     GithubProfile:
                                                     <a href="https://github.com/${github}" target="_blank">
                                                       ${github}
                                                     </a>
                                                   </li>`
                                                : ''

const createSchool = ({ school }) => school ? `<li class="list-group-item">School: ${school}</li>` : ''

const createTeam = (team) => team
  .map((employee) => `
    <div class="card col-sm-6 col-md-4 col-lg-3">
      <div class="card-header">
        <h2>${employee.name}</h2>
        <h3>${employee.employeeType} <i class="bi bi-diagram-3"></i></h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        ${createOfficeNumber(employee)}
        ${createGithubLink(employee)}
        ${createSchool(employee)}
      </ul>
    </div>`)
  .join('\n')

const generateHTML = (team) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  </head>
  <body>
    <div class="container-fluid bg-success bg-gradient text-white">
      <h1 class="container-fluid ">Organization  <i class="bi bi-diagram-3"></i></h1>
    </div>
    <div class="container-fluid">    
      <div class="row">
        ${createTeam(team)}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  </body>
  </html>`

export default generateHTML
