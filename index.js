// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title/name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Write kind of license should your project have?',
        choices: ["None", 'MIT', 'Apache 2.0', "GNU 2.0", "GNU Lesser 2.1", 'GNU 3.0', "GNU Affero 3.0", "BSD 2.0", "BSD 3.0", "Boost Software 1.0", "Creative Commons Zero 1.0", "Eclipse 2.0", "Mozilla 2.0"],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
function writeToFile(data) {
    const fileName = 'README.md';
    fs.writeFile(fileName, readmePageContent(data), (err) => err ? console.log(err) : console.log('README successfully creadted!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
    })
}

// Function call to initialize app
init();
