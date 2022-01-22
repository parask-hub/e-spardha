const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentquestion = {};
let acceptanswer = true;
let score = 0;
let questioncounter = 0;
let availblequestion = [];
let questions = [
    {
        question: " Inside Which HTML Element do we get the javascript ?",
        choice1: "<script>",
        choice2: "javascript",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: " What is the correct syntax for reffering to an external script called 'xxx.js' ?",
        choice1: "<script href = 'xxx.js'>",
        choice2: "<script src = 'xxx.js'>",
        choice3: "<script name = 'xxx.js'>",
        choice4: "<script file = 'xxx.js'>",
        answer: 2
    },
    {
        question: " How Do You Write 'Hello World' Alert Box ?",
        choice1: "msgbox('Hello World')",
        choice2: "alertbox('Hello World')",
        choice3: "msg('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4
    },



]
// constant
const correct_bonus = 10;
const max_questions = 3;
starttest = () => {
    questioncounter = 0;
    score = 0;
    availblequestion = [...questions];
    getnewquestion();


};

getnewquestion = () => {
    questioncounter++;
    const questionindex = Math.floor(math.random() = availblequestion.length);
    currentquestion = availblequestion[questionindex];
    question.innerText = currentquestion.question;

}

starttest();