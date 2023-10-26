const prompts = [
    {
        question: "Primitive data types do NOT include:",
        answers: {
            a: "Undefined",
            b: "String",
            c: "Number",
            d: "Objects"
        },
        correctAnswer: "d"
    },
    {
        question: "The modulus operator evenly divides two numbers.",
        answer: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    },
    {
        question: "Arrays are used to store groups of data in a single variable.",
        answer: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "The index of an array always begins with which number?",
        answer: {
            a: "2",
            b: "10",
            c: "0",
            d: "1"
        },
        correctAnswer: "c"
    },
    {
        question: "In which scope would you delcare a variable in you want it to only be accessible by that code block?",
        answer: {
            a: "Global",
            b: "Script",
            c: "Local",
            d: "Event"
        },
        correctAnswer: "c"
    },
    {
        question: "When does a keydown event get triggered?",
        answer: {
            a: "Pressing the down arrow key.",
            b: "Pressing any key down.",
            c: "Letting any key pop back up after pressing it down.",
            d: "Scrolling down the page with your mouse."
        },
        correctAnswer: "b"
    },
    {
        question: "What command can you use to stop event bubbling from happening?",
        answer: {
            a: ".stopBubbling",
            b: ".stopEvent",
            c: ".stopPropagation",
            d: ".stopFunction"
        },
        correctAnswer: "c"
    },
    {
        question: "How is a string notated in JavaScript?",
        answer: {
            a: "Double or single quotes.",
            b: "Curly or square brackets.",
            c: "Round or square brackets.",
            d: "Two forward slashes or two backward slashes."
        },
        correctAnswer: "a"
    },
    {
        question: "What type of notation is used to access items in an object?",
        answer: {
            a: "Dot notation.",
            b: "Square notation.",
            c: "Bracket notation.",
            d: "Both a and c"
        },
        correctAnswer: "d"
    },
    {
        question: "What does the this keyword refer to?",
        answer: {
            a: "Global scope.",
            b: "The work This.",
            c: "Global object.",
            d: "Current CSS sheet."
        },
        correctAnswer: "c"
    },
];
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

startbtn.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("sdgardh")
    startbtn.style.display = "none";
    questionEl.style.display = "block";
    
    questionText.innerHTML = prompts[currentQuestion].question;
    btnA.innerHTML = prompts[currentQuestion].answers[0];
    btnB.innerHTML = prompts[currentQuestion].answers[1];
    btnC.innerHTML = prompts[currentQuestion].answers[2];
    btnD.innerHTML = prompts[currentQuestion].answers[3];

    /*let timeLeft=90
    const timer = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft
    if(timeLeft === 0) {
        clearInterval(timer);
    }
}, 1000)*/;
nextbtn.addEventListener("click", nextQuestion)
}


function nextQuestion() {
    for (let i=0; i< prompts.length; i++){

        let response = window.question(prompts[i].question);
        if(response == prompts[i].answer){
            score+=10;
            alert("Correct")
        } else {
            timeLeft-=5
            alert("Incorrect")
        };
    };
}


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