//for external files
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//questions for the user
const questions = [
  {
    type: "input",
    message: "GitHub username?",
    name: "username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Cannot be left blank!");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "GitHub repo name?",
    name: "repo",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Cannot be left blank!");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Email address?",
    name: "email",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Cannot be left blank!");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What would you like to name this project?",
    name: "name",
  },
  {
    type: "input",
    message: "Please decribe what this project is.",
    name: "description",
  },
  {
    type: "input",
    message: "What is the application supposed to do?",
    name: "purpose",
  },
  {
    type: "input",
    message: "How do you install it?",
    name: "install",
  },
  {
    type: "input",
    message: "Contribution Instructions",
    name: "contribute",
  },
  {
    type: "input",
    message: "Testing Instructions",
    name: "testing",
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

function formatREADME(info) {
  const format = `
    # ${info.name} 
    ##Your GitHub username:
    ${info.username}
    ##Your repository name:
    ${info.repo}
    ##Your email adress:
    ${info.email}
    ## What this app is: 
    ${info.description}
    ## What it is used for:
    ${info.install}
    ## How its installed:
    ${info.install}
    ## Contribution instructions:
    ${info.contribute}
    ## Testing instructions:
    ${info.test}
    `;

  writeToFile("README.md", readMeText);
}

//Initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    formatREADME(response);
  });
}

//Call to initialize program
init();
