function generateIntern(data) {
    return `
        <div class="card border-danger mb-3" style="max-width: 18rem;">
            <div class="card-header cardName">${data.internName}</div>
            <div class="card-header">🎓 Intern</div>
            <div class="card-body text-danger">
                <ul>
                    <li>ID: ${data.internId}</li>
                    <li>Email: ${data.internEmail}</li>
                    <li>School: ${data.internSchool}</li>
                </ul>
            </div>
        </div>`
}

module.exports = generateIntern;