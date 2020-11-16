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
        name: 'Install',
    },
    {
        type
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
