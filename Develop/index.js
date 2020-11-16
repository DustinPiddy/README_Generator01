//for external files
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//questions for the user
const questions = [
    {
        type: 'input',
        message: "What would you like to name this project?",
        name: 'name', 
    },
    {
        type: 'input',
        message: "Please decribe what this project is.",
        name: 'description', 
    },
    {
        type: 'input',
        message: "What is the application supposed to do?",
        name: 'purpose'
    },
    {
        type: 'input',
        message: "How do you install it?",
        name: 'install',
    },
    {
        type: 'input',
        message: "Contribution Instructions",
        name: 'contribute',
    },
    {
        type: 'input',
        message: "Testing Instructions",
        name: 'testing',
    },
];

//README file writing function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your file was successfully generated!");
    });
}

//Initialize program
function init() {
    inquirer.prompt(questions).then(function(response) {
        formatREADME(response);
    });
}

//Call to initialize program
init();
