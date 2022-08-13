// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {questions} = require('./questions.js');
const generateREADME = require('./writeFile.js')

function askQuestions(questions) {
    let qNum = 0;
    const response = {};
    async function promptQuestion() {
        const answer = await inquirer
        .prompt({
            type: questions[qNum].type,
            name: questions[qNum].name,
            message: questions[qNum].message,
            choices: questions[qNum].choices
        })
        const answerName = questions[qNum].name;
        response[answerName] = answer[questions[qNum].name];
        qNum++
        if(qNum < questions.length) {
            promptQuestion()
        } else {
            generateREADME(response);
        } 
    }
    promptQuestion()
};

// TODO: Create a function to initialize app
function init() {
    askQuestions(questions)
};

// Function call to initialize app
init();

