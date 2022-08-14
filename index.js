// Include packages needed for this application
const inquirer = require('inquirer');
const {questions} = require('./questions.js');
const generateREADME = require('./writeFile.js')

// FUNCTION TO ASK THE QUESTIONS IN THE TERMINAL 
function askQuestions(questions) {
    let qNum = 0;
    // OBJECT TO SAVE RESPONSES 
    const response = {};
    // USE AN ASYNC FUNCTION TO WAIT FOR THE RESPONSE IN THE TERMINAL 
    async function promptQuestion() {
        const answer = await inquirer
        .prompt({
            type: questions[qNum].type,
            name: questions[qNum].name,
            message: questions[qNum].message,
            choices: questions[qNum].choices
        })
        // SAVE ANSWER TO THE OBJECT 
        const answerName = questions[qNum].name;
        response[answerName] = answer[questions[qNum].name];
        // USE RECCURSION TO CALL THE FUNCTION IF THERE ARE STILL QUESTIONS LEFT 
        qNum++
        if(qNum < questions.length) {
            promptQuestion()
        } else {
            // SEND THE RESPONSES TO THE GENERATE README FUNCTION 
            generateREADME(response);
        } 
    }
    promptQuestion()
};

// Create a function to initialize app
function init() {
    askQuestions(questions)
};

// Function call to initialize app
init();

