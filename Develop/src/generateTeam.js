function generateTeam(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container bg-warning">
                <h1 class="display-4">Welcome to My Team</h1>
            </div>
        </div>
        <section class="dizCards">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header cardName">${data.managerName}</div>
                <div class="card-header">☕️ Manager</div>
                <div class="card-body text-primary">
                    <ul>
                        <li>ID: ${data.managerId}</li>
                        <li>Email: ${data.managerEmail}</li>
                        <li>Office number: ${data.managerOffice}</li>
                    </ul>
                </div>
            </div>
        `
}

module.exports = generateTeam;