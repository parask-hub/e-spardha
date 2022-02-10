const question = document.getElementById("question");
// const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");


let currentquestion = {};
let acceptanswers = true;
let score = 0;
let questioncounter = 0;
let availablequestion = [];
let opt = 0;


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

//constants 
const Correct_bonus = 10;
const max_question = 3;

starttest = () => {
    questioncounter = 0;
    score = 0;
    availablequestion = [...questions];
    console.log(availablequestion);
    getnewquestion();
}



getnewquestion = () => {
    currentquestion = availablequestion[questioncounter];
    question.innerText = currentquestion.question;
    choice1.innerText = currentquestion.choice1;
    choice2.innerText = currentquestion.choice2;
    choice3.innerText = currentquestion.choice3;
    choice4.innerText = currentquestion.choice4;
}

function prev() {
    questioncounter--;
    getnewquestion();
}
function next() {
    questioncounter++;
    getnewquestion();
}
function check() {
    choice1.style.color = "red";
}

let bg = document.getElementsByClassName("choice-container");



// function check() {
//     if (choosed == currentquestion.answer) {
//         alert(" You choosed correct option");
//     }
//     else {
//         alert(" You choosed wrong option");
//     }
// }

starttest();