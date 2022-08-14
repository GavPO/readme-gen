// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "fullName",
        message: "What is your full name?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "desc",
        message: "What would a good description for your project be?"
    },
    {
        type: "input",
        name: "install",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this app?"
    },
    {
        type: "input",
        name: "credits",
        message: "What else would you like to put in your credits?"
    },
    {
        type: "list",
        name: "lisc",
        message: "What kind of license would you like?",
        choices: ["mit", "gpl", "apache"]
    }
];

// EXPORT THE QUESTIONS TO BE USED IN index.js 
module.exports = {questions};