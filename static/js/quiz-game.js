// List of quiz questions
const questions = [{
    question: "How many planets do we have in our solar system?",
    answers: [{
            text: "8",
            correct: true,
        },
        {
            text: "6",
            correct: false,
        },
        {
            text: "3",
            correct: false,
        },
        {
            text: "10",
            correct: false,
        },
    ],
},
{
    question: "The closest planet to the Earth is?",
    answers: [{
            text: "Venus",
            correct: true,
        },
        {
            text: "Pluto",
            correct: false,
        },
        {
            text: "Mars",
            correct: false,
        },
        {
            text: "Jupiter",
            correct: false,
        },
    ],
},
{
    question: "Which planet is the hottest?",
    answers: [{
            text: "Saturn",
            correct: false,
        },
        {
            text: "Earth",
            correct: false,
        },
        {
            text: "Venus",
            correct: true,
        },
        {
            text: "Mercury",
            correct: false,
        },
    ],
},
{
    question: "Which planet is the coldest?",
    answers: [{
            text: "Uranus",
            correct: false,
        },
        {
            text: "Earth",
            correct: false,
        },
        {
            text: "Mars",
            correct: false,
        },
        {
            text: "Neptune",
            correct: true,
        },
    ],
},

{
    question: "Which planet is famous for having big rings?",
    answers: [{
            text: "Earth",
            correct: false,
        },
        {
            text: "Saturn",
            correct: true,
        },
        {
            text: "Mercury",
            correct: false,
        },
        {
            text: "Jupiter",
            correct: false,
        },
    ],
},
{
    question: "What planet is known as the red planet?",
    answers: [{
            text: "Mars",
            correct: true,
        },
        {
            text: "Venus",
            correct: false,
        },
        {
            text: "Uranus",
            correct: false,
        },
        {
            text: "Neptune",
            correct: false,
        },
    ],
},
{
    question: "Saturn has 150 moons and moonlets",
    answers: [{
            text: "True",
            correct: true,
        },
        {
            text: "False",
            correct: false,
        },
    ],
},
{
    question: "Who was the first person to walk on the moon?",
    answers: [{
            text: "Neil Armstrong ",
            correct: true,
        },
        {
            text: "Elon Musk",
            correct: false,
        },
        {
            text: "William Shatner",
            correct: false,
        },
        {
            text: "Tim Peake",
            correct: false,
        },
    ],
},
{
    question: "What is the name of NASA's most famous space telescope?",
    answers: [{
            text: "Strong Telescope",
            correct: false,
        },
        {
            text: "Space Telescope",
            correct: false,
        },
        {
            text: "Hubble Space Telescope",
            correct: true,
        },
        {
            text: "Astro Telescope",
            correct: false,
        },
    ],
},
{
    question: "Earth is located in which galaxy?",
    answers: [{
            text: "The Mars Galaxy",
            correct: false,
        },
        {
            text: "The Milky Way Galaxy",
            correct: true,
        },
        {
            text: "The Snickers Galaxy",
            correct: false,
        },
        {
            text: "The Stars Galaxy",
            correct: false,
        },
    ],
},
{
    question: "Is the sun a star or a planet?",
    answers: [{
            text: "Star",
            correct: true,
        },
        {
            text: "Planet",
            correct: false,
        },
    ],
},
{
    question: "Have humans ever walked on Mars?",
    answers: [{
            text: "Yes",
            correct: false,
        },
        {
            text: "No",
            correct: true,
        },
    ],
},
{
    question: "Is the planet Neptune bigger than Earth?",
    answers: [{
            text: "Yes ",
            correct: true,
        },
        {
            text: "No",
            correct: false,
        },
    ],
},
{
    question: "Does the sun orbit the Earth?",
    answers: [{
            text: "Yes",
            correct: false,
        },
        {
            text: "No",
            correct: true,
        },
    ],
},
{
    question: "Can humans breathe normally in space?",
    answers: [{
            text: "Yes",
            correct: false,
        },
        {
            text: "No",
            correct: true,
        },
    ],
},
];

// Quiz code - Credit Web Dev Simplified - base code logic amended from his YouTube tutorial, code has been modified and extra features/components added to it

//Declared constant variables
const nextButton = document.getElementById("next-btn");
const quizQuestions = document.getElementById("quiz-questions");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionCounterText = document.getElementById("question-counter");
const totalCorrectAnswersText = document.getElementById("score-tally");
const maxQuestions = 15;
const innerProgressBar = document.getElementById("inner-progress-bar");
const congratulationsHeading = document.getElementById("congratulations-heading");
const outroText = document.getElementById("outro-text");
const outroContainer = document.getElementById("outro-container");
const homeButton = document.getElementById("home-btn");
const restartButton = document.getElementById("restart-btn");

// Declared let variables
let shuffledQuestions;
let currentQuestionIndex;
let score;
let progressBarCounter;
let quizTimerRef;

// Click event for next button to increment to next question
nextButton.addEventListener("click", () => {
currentQuestionIndex++;
nextQuestion();
});

// Calls start game function and starts the quiz
startGame();

/**
* Runs the main game loop
*/
function startGame() {
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
score = 0;
progressBarCounter = 0;
nextQuestion();
}

/**
* Get's question and shuffles it. Also adds question counter and score text as well as increments the question
*/
function nextQuestion() {
refreshUIForNextQuestion();
initTimer();
showQuestion(shuffledQuestions[currentQuestionIndex]);
progressBarCounter++;
questionCounterText.innerText = `Question: ${currentQuestionIndex + 1}/${maxQuestions}`;
totalCorrectAnswersText.innerText = `Score ${score}`;
// Progress bar - calculates segment width to add and updates on each new question
innerProgressBar.style.width = `${(progressBarCounter / maxQuestions) * 100}%`;
}

/**
* This function calls the countdown timer and shows an alert once the timer has reached 0
*/
function initTimer() {
let timeleft = 60;
clearInterval(quizTimerRef);
document.getElementById("timer").textContent = `Time: ${timeleft} sec`;
quizTimerRef = setInterval(function() {
    timeleft--;
    document.getElementById("timer").textContent = `Time: ${timeleft} sec`;
    if (timeleft <= 0) {
        alert(`Oh no! You've run out of time. You scored ${score}/${maxQuestions}. Why not play again and see if you can finish the quiz!`);
        restartButton.classList.remove("hide");
        restartButton.onclick = function() {
            location.href = "quiz-game.html";
        };
        homeButton.classList.remove("hide");
        homeButton.onclick = function() {
            location.href = "quiz-game-menu.html";
        };
        nextButton.classList.add("hide");
        quizQuestions.classList.add("hide");
        clearInterval(quizTimerRef);
    }
}, 1000);
}

/**
* Shows questions and answers in quiz
*/
function showQuestion() {
const question = shuffledQuestions[currentQuestionIndex];
questionElement.innerText = question.question;
question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", onAnswerClick);
    answerButtons.appendChild(button);
});
}

/**
* Increments score
*/
function incrementScore() {
score++;
totalCorrectAnswersText.innerText = `Score ${score}`;
}

/**
* Resets questions and answers UI to default state each time a new question is set
*/
function refreshUIForNextQuestion() {
nextButton.classList.add("hide");
while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
}
}

/**
*  Once an answer has been selected remove click ability from remaining answer buttons
*/
function removeClickListenersFromButtons(buttons) {
for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("click", onAnswerClick);
}
}

/*
Checks to see if player has selected correct or wrong answer, changes button colour depending on the result
*/
function onAnswerClick(event) {
const selectedButton = event.target;
const correct = selectedButton.dataset.correct;
let answerButton = document.getElementsByClassName("btn");
removeClickListenersFromButtons(answerButton);
if (correct) {
    selectedButton.style.backgroundColor = "green";
    incrementScore();
} else {
    selectedButton.style.backgroundColor = "red";
}
// Checks to see if player is on last question and if so shows play again and home buttons
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
} else {
    restartButton.classList.remove("hide");
    restartButton.onclick = function() {
        location.href = "quiz-game.html";
    };
    homeButton.classList.remove("hide");
    homeButton.onclick = function() {
        location.href = "quiz-game-menu.html";
    };
    clearInterval(quizTimerRef);
    endQuiz();
}
}

/**
*  This function ends the quiz and displays outro text
*/
function endQuiz() {
totalCorrectAnswersText.innerText = `Score ${score}`;
answerButtons.classList.add("hide");
quizQuestions.classList.add("hide");
outroContainer.classList.remove("hide");
congratulationsHeading.innerText = `Congratulations, you scored ${score}!`;
outroText.innerText = "We hoped you enjoyed testing out your space knowledge.";
outroContainer.classList.remove("hide");
}