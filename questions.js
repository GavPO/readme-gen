// TODO: Create an array of questions for user input
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
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "desc",
        message: "What would a good description for your project be?"
    },
    {
        type: "list",
        name: "lisc",
        message: "What kind of license would you like?",
        choices: ["mit", "gnu", "apache"]
    }
];

module.exports = {questions};