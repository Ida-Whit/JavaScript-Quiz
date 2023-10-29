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
let score = 0;
let timeLeft = 90;
const questionEl = document.getElementById("question-box");
const startbtn = document.getElementById("start");
const timeEl = document.getElementById("timer");
let endScore = document.getElementById("score")
let questionText = document.getElementById("question");
let btnA = document.getElementById("btn-a");
let btnB = document.getElementById("btn-b");
let btnC = document.getElementById("btn-c");
let btnD = document.getElementById("btn-d");
let button = document.querySelectorAll(".btn");
let timer;
const submitbtn = document.getElementById("submit")
const highSc = document.getElementById ("scoreScreen")
let initialInput = document.getElementById ("name")
let highScore = { initials: initialInput.value,
    userScore: score
    };



function startQuiz() {
    //Once "start" is clicked, make the button disappear and the quiz questions appear
    startbtn.style.display = "none";
    questionEl.style.display = "block";
    //Pull quiz questions and answer choices from the prompts object and display them on the screen
    //Set a timer countdown to start as soon as the "Start" button is hit.
    timer = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft
        if (timeLeft <= 0) {
            endQuiz()

        }
    }, 1000);
    click()
}



function click() {
    questionText.innerHTML = prompts[currentQuestion].question;
    btnA.innerHTML = prompts[currentQuestion].a;
    btnB.innerHTML = prompts[currentQuestion].b;
    btnC.innerHTML = prompts[currentQuestion].c;
    btnD.innerHTML = prompts[currentQuestion].d;
}



function nextQuestion() {
    if (this.textContent !== prompts[currentQuestion].correctAnswer) {
        timeLeft = timeLeft - 10
        timeEl.textContent = timeLeft
    } else {
        score ++
    }

    currentQuestion++
   
    if (timeLeft <= 0 || currentQuestion === prompts.length) {
        endQuiz();
    } else {
        click()
    }
};

function endQuiz() {
    questionEl.style.display = "none";
    results.style.display = "block"

    clearInterval(timer)

    if(timeLeft < 0){
        timeLeft = 0
        timeEl.textContent = timeLeft
    }
    endScore.innerHTML = score
}

function scoreList (event) {
    event.preventDefault();
    results.style.display = "none"
    highSc.style.display = "block"
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

let header = document.createElement("h2");
let paragraph = document.createElement("p");

header.textContent = "High Score Board";
paragraph.innerHTML = JSON.stringify(highScore)

highSc.appendChild(header);
header.appendChild(paragraph);

//This will be used to get the users initials for the high score board...
//will need to render the initials into an array before i can do that.
//const initials = localStorage.getItem ("initials");



startbtn.addEventListener("click", startQuiz);

btnA.addEventListener("click", nextQuestion)
btnB.addEventListener("click", nextQuestion)
btnC.addEventListener("click", nextQuestion)
btnD.addEventListener("click", nextQuestion)

submitbtn.addEventListener("click", scoreList)


/*const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

<div class="card">
<h2>Last Registered User:</h2>
<p><strong>Email:</strong> <span id="user-email"></span></p>
<p><strong>Password:</strong> <span id="user-password"></span></p>
</div>*/