function generateEngineer(data) {
    return `
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header cardName">${data.engineerName}</div>
            <div class="card-header">👓 Engineer</div>
            <div class="card-body text-success">
                <ul>
                    <li>ID: ${data.engineerId}</li>
                    <li>Email: ${data.engineerEmail}</li>
                    <li>GitHub: ${data.engineerGitHub}</li>
                </ul>
            </div>
        </div>`
}

module.exports = generateEngineer;