/*let questions = [
    {
        prompt: "Primitive data types do NOT include:\n(a) Undefined\n(b) String\n(c) Number\n(d) Objects",
        answer: "d"
    },
    {
        prompt: "The modulus operator evenly divides two numbers.\n(a) True \n(b) False",
        answer: "b"
    },
    {
        prompt: "Arrays are used to store groups of data in a single variable.\n(a) True\n(b) False",
        answer: "a"
    },
    {
        prompt: "The index of an array always begins with which number?\n(a) 2\n(b) 10\n(c) 0\n(d) 1",
        answer: "c"
    },
    {
        prompt: "In which scope would you delcare a variable in you want it to only be accessible by that code block?\n(a) Global\n(b) Script\n(c) Local\n(d)Event",
        answer: "c"
    },
    {
        prompt: "When does a keydown event get triggered by?\n(a) Pressing the down arrow key\n(b) Pressing any key down.\n(c) Letting any key pop back up after pressing it down.\n(d) Scrolling down the page with your mouse.",
        answer: "b"
    },
    {
        prompt: "What command can you use to stop event bubbling from happening?\n(a) .stopBubbling\n(b) .stopEvent\n(c) .stopPropagation\n(d) .stopFunction",
        answer: "c"
    },
    {
        prompt: "How is a string notated in JavaScript?\n(a) double or single quotes\n(b) curly or square brackets\n(c) round or square brackets\n(d) two forward slashes or two backward slashes",
        answer: "a"
    },
    {
        prompt: "What type of notation is used to access items in an object?\n(a) dot notation\n(b) square notation\n(c) bracket notation\n(d) both a and c",
        answer: "d"
    },
    {
        prompt: "What does the this keyword refer to?\n(a) Global Scope\n(b) The word This\n(c) Global Object\n(d) Current CSS Sheet",
        answer: "c"
    },
];*/

let score = 0;
const startbttn = document.getElementById("start");
let timeEl = document.getElementById("timer");
const questionEl = document.getElementById("questions");

let timeLeft=90
const timer = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft
    if(timeLeft === 0) {
        clearInterval(timer);
    }
}, 1000);

//startbttn.addEventListener("click", )





/*for (let i=0; i< questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct")
    } else {
        alert("Incorrect")
    };
};*/
//alert("you got " + score + "/" + questions.length);