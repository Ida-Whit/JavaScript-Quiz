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
const questionEl = document.getElementById("question-box");
const startbtn = document.getElementById("start");
const timeEl = document.getElementById("timer");
const nextbtn = document.getElementById("next-btn");
let questionText = document.getElementById("question");
let btnA = document.getElementById("btn-a");
let btnB = document.getElementById("btn-b");
let btnC = document.getElementById("btn-c");
let btnD = document.getElementById("btn-d");
let button = document.getElementById("btn");



startbtn.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("testing")
    //Once "start" is clicked, make the button disappear and the quiz questions appear
    startbtn.style.display = "none";
    questionEl.style.display = "block";
    button.addEventListener("click" function() {
        color = "LightGreen"
        if (color === "LightGreen") {
            button.setAttribute()
        }
    })
    //Pull quiz questions and answer choices from the prompts object and display them on the screen
    questionText.innerHTML = prompts[currentQuestion].question;
    btnA.innerHTML = prompts[currentQuestion].a;
    btnB.innerHTML = prompts[currentQuestion].b;
    btnC.innerHTML = prompts[currentQuestion].c;
    btnD.innerHTML = prompts[currentQuestion].d;
    //Set a timer countdown to start as soon as the "Start" button is hit.
    /*let timeLeft=90
    const timer = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft
    if(timeLeft === 0) {
        clearInterval(timer);
    }
}, 1000);*/
nextQuestion;
}


function nextQuestion() {
    for (let i = 0; i < prompts.length; i++) {
    let userAnswer = prompts[i]
        if(userAnswer === prompts.correctAnswer) {
        score += 10;
    } else {
        timeLeft -= 5
    }
    }
};


/*for (let i=0; i< prompts.length; i++){
    let response = window.question(prompts[i].question);
    if(response == prompts[i].answer){
        score+=10;
        alert("Correct")
    } else {
        timeLeft-+5
        alert("Incorrect")
    };
};*/
//alert("you got " + score + "/" + prompts.length);