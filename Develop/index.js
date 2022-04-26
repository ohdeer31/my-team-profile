const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const generateTeam = require('./src/generateTeam');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOffice",
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "addMember",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }
    ])
    .then((answers) => {
        const teamContent = generateTeam(answers);
        fs.writeFile('./dist/team.html', teamContent, (err) => {
            if (err) {
                console.log(err);
            }
        });
        if (answers.addMember === "Engineer") {
            return getEngineerAnswers();
        } else if (answers.addMember === "Intern") {
            return getInternAnswers();
        } else {
            fs.appendFile('./dist/team.html', "</section></body></html>", (err) =>
            err ? console.log(err) : console.log('Thanks for using the application, your team html will be under dist file.')
            );
            return;
        }
    })

function getEngineerAnswers() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is your engineer's id?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is your engineer's GitHub username?",
                name: "engineerGitHub",
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "addMember",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            },
        ])
        .then((answers) => {
            const engineerContent = generateEngineer(answers);
            fs.appendFile('./dist/team.html', engineerContent, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            if (answers.addMember === "Engineer") {
                return getEngineerAnswers();
            } else if (answers.addMember === "Intern") {
                return getInternAnswers();
            } else {
                fs.appendFile('./dist/team.html', "</section></body></html>", (err) =>
                err ? console.log(err) : console.log('Thanks for using the application, your team html will be under dist file.')
                );
                return;
            }
        })
}

function getInternAnswers() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is your intern's id?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "internSchool",
            },
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "addMember",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            },
        ])
        .then((answers) => {
            const internContent = generateIntern(answers);
            fs.appendFile('./dist/team.html', internContent, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            if (answers.addMember === "Engineer") {
                return getEngineerAnswers();
            } else if (answers.addMember === "Intern") {
                return getInternAnswers();
            } else {
                fs.appendFile('./dist/team.html', "</section></body></html>", (err) =>
                err ? console.log(err) : console.log('Thanks for using the application, your team html will be under dist file.')
                );
                return;
            }
        })
}

