const prompts = [
    {
        question: "Primitive data types do NOT include:",
        correctAnswer: "Objects",
        a: "Undefined",
        b: "String",
        c: "Number",
        d: "Objects"
    },
    {
        question: "The index of an array always begins with which number?",
        correctAnswer: "0",
        a: "2",
        b: "10",
        c: "0",
        d: "1"
    },
    {
        question: "In which scope would you delcare a variable in you want it to only be accessible by that code block?",
        correctAnswer: "Local",
        a: "Global",
        b: "Script",
        c: "Local",
        d: "Event"
    },
    {
        question: "What does the modulus operator (%) do?.",
        correctAnswer: "Gives the remainder when one number is divided by another",
        a: "Evenly divides two numbers",
        b: "Gives a percentage",
        c: "Gives the remainder when one number is divided by another",
        d: "Multiplies two numbers together"
    },
    {
        question: "What are arrays used for?",
        correctAnswer: "To store groups of data in a single variable.",
        a: "To store groups of data in a single variable.",
        b: "To store a single data point in a variable.",
        c: "To iterate through a group of data multiple times.",
        d: "To assign properties to your CSS sheet."
    },
    {
        question: "When does a keydown event get triggered?",
        correctAnswer: "Pressing any key down.",
        a: "Pressing the down arrow key.",
        b: "Pressing any key down.",
        c: "Letting any key pop back up after pressing it down.",
        d: "Scrolling down the page with your mouse."
    },
    {
        question: "What command can you use to stop event bubbling from happening?",
        correctAnswer: ".stopPropagation",
        a: ".stopBubbling",
        b: ".stopEvent",
        c: ".stopPropagation",
        d: ".stopFunction"
    },
    {
        question: "How is a string notated in JavaScript?",
        correctAnswer: "Double or single quotes.",
        a: "Double or single quotes.",
        b: "Curly or square brackets.",
        c: "Round or square brackets.",
        d: "Two forward slashes or two backward slashes."
    },
    {
        question: "What type of notation is used to access items in an object?",
        correctAnswer: "Either dot notation or bracket notation.",
        a: "Dot notation.",
        b: "Square notation.",
        c: "Bracket notation.",
        d: "Either dot notation or bracket notation."
    },
    {
        question: "What does the this keyword refer to?",
        correctAnswer: "Global object.",
        a: "Global scope.",
        b: "The work This.",
        c: "Global object.",
        d: "Current CSS sheet."
    },
];
//Declare variables
let currentQuestion = 0
let timeLeft = 90;
const questionEl = document.getElementById("question-box");
const startbtn = document.getElementById("start");
const timeEl = document.getElementById("timer");
const bodyEl = document.getElementById("body")
let endScore = document.getElementById("score")
let questionText = document.getElementById("question");
let btnA = document.getElementById("btn-a");
let btnB = document.getElementById("btn-b");
let btnC = document.getElementById("btn-c");
let btnD = document.getElementById("btn-d");
let button = document.querySelectorAll(".btn");
let timer;
const scoreBoard = document.getElementById("scores")
const instructions = document.getElementById("list")
const submitbtn = document.getElementById("submit")
const highSc = document.getElementById ("scoreScreen")
let initialInput = document.getElementById ("name") 
let initials = localStorage.getItem ("initials");
let header = document.createElement("h2");
let paragraph = document.createElement("p");
let restart = document.getElementById("return");
let scores = JSON.parse(localStorage.getItem("highScore"));



function startQuiz() {
    //Once "start" is clicked, make the button disappear and the quiz questions appear
    startbtn.style.display = "none";
    instructions.style.display = "none"
    bodyEl.style.display = "none"
    questionEl.style.display = "block";
    //Set a timer countdown to start as soon as the "Start" button is hit.
    timeLeft = 90
    timer = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft
        if (timeLeft <= 0) {
            endQuiz()

        }
    }, 1000);
    click()
}


//Pull quiz questions and answer choices from the prompts object and display them on the screen
function click() {
    questionText.innerHTML = prompts[currentQuestion].question;
    btnA.innerHTML = prompts[currentQuestion].a;
    btnB.innerHTML = prompts[currentQuestion].b;
    btnC.innerHTML = prompts[currentQuestion].c;
    btnD.innerHTML = prompts[currentQuestion].d;
}


//Determine if the option user clicks is correct or incorrect and deduct time/add points accordingly.
function nextQuestion() {
    if (this.textContent !== prompts[currentQuestion].correctAnswer) {
        timeLeft = timeLeft - 10
        timeEl.textContent = timeLeft
    }
//Move onto next question
    currentQuestion++
//Ends the timer if the time goes to zero or if all the questions have been answered.
    if (timeLeft <= 0 || currentQuestion === prompts.length) {
        endQuiz();
    } else {
        click()
    }
};


//Takes away the questions display and shows the end results display.
function endQuiz() {
    questionEl.style.display = "none";
    results.style.display = "block"
//Stops the timer and displays how much time was left at the end of the quiz.
    clearInterval(timer)

    if(timeLeft < 0){
        timeLeft = 0
        timeEl.textContent = timeLeft
    }
    endScore.innerHTML = timeLeft
}

function scoreList (event) {
    event.preventDefault();
    results.style.display = "none"
    highSc.style.display = "block"
    let highScore = {name: initialInput.value.trim(),
        userScore: timeLeft
        };
    localStorage.setItem("highScore", JSON.stringify(highScore));
    }


function showScores(){
    results.style.display = "none"
    questionEl.style.display = "none"
    highSc.style.display = "block"
    startbtn.style.display = "none";
    instructions.style.display = "none"
    bodyEl.style.display = "none"
    clearInterval(timer)
}

function beginning() {
    results.style.display = "none"
    questionEl.style.display = "none"
    highSc.style.display = "none"
    bodyEl.style.display = "block"
    startbtn.style.display = "block";
    instructions.style.display = "block"
    clearInterval(timer)
}

header.textContent = "Score Board";
paragraph.textContent = `initials: ${scores.name} - score: ${scores.userScore}`



highSc.appendChild(header);
header.appendChild(paragraph);

startbtn.addEventListener("click", startQuiz);

btnA.addEventListener("click", nextQuestion)
btnB.addEventListener("click", nextQuestion)
btnC.addEventListener("click", nextQuestion)
btnD.addEventListener("click", nextQuestion)

submitbtn.addEventListener("click", scoreList)

scoreBoard.addEventListener("click", showScores)

restart.addEventListener("click", beginning)
