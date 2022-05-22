//  level selector
let selectedLevel = "easy";
const levelSelectors = document.getElementsByClassName("level-selector"); // Get all level buttons
let cards;
let j = 1;
let score = 0;

const easyLevel = document.getElementById("easy-level-container");
const mediumLevel = document.getElementById("medium-level-container");
const hardLevel = document.getElementById("hard-level-container");

let easy = easyLevel.id; // get the id of level containers
let medium = mediumLevel.id;
let hard = hardLevel.id;

easy = easy.substring(0, easy.length - 16);
medium = medium.substring(0, medium.length - 16);
hard = hard.substring(0, hard.length - 16);

//add random colors to cards
let basicColorArray = [
    '#EF919B', '#EF919B', '#F8B392', '#F8B392', '#F6F7B0',
    '#F6F7B0', '#A0CFA2', '#A0CFA2', '#71BEE7', '#71BEE7',
    '#8380B3', '#8380B3', '#809BCE', '#809BCE', '#95B8D1',
    '#95B8D1'
];

let colorArray;

function sortColors() {
    colorArray = basicColorArray;
    if (selectedLevel == "easy") {
        colorArray = basicColorArray;
        cards = document.getElementsByClassName("card-easy");
    } else if (selectedLevel == "medium") {
        colorArray.push('#B8E0D2', '#B8E0D2', '#D6EADF', '#D6EADF');
        cards = document.getElementsByClassName("card-medium");
    } else if (selectedLevel == "hard") {
        colorArray.push('#B8E0D2', '#B8E0D2', '#D6EADF', '#D6EADF', '#EAC4D5', '#EAC4D5', '#B7FDDA', '#B7FDDA');
        cards = document.getElementsByClassName("card-hard");
    }

    colorArray.sort(() => 0.5 - Math.random()); // Randomise colors

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", flipCard);
    }

    setTimeout(function () {
        for (let i = 0; i < colorArray.length; i++) {
            cards[i].style.backgroundColor = colorArray[i]; // Add colors to cards in a random order
        }
    }, 500);
}

function resetCards() {
    for (let k = 0; k < cards.length; k++) {
        cards[k].classList.add("card-back");
        cards[k].classList.remove("card-front");
    }
}

function selectLevel() {
    selectedLevel = this.id; // Whichever button they click, get that id

    if (selectedLevel == "easy") {
        easyLevel.classList.remove("hide"); // Set the amount of cards depending on which level was chosen
        mediumLevel.classList.add("hide");
        hardLevel.classList.add("hide");
    } else if (selectedLevel == "medium") {
        easyLevel.classList.add("hide");
        mediumLevel.classList.remove("hide");
        hardLevel.classList.add("hide");
    } else if (selectedLevel == "hard") {
        easyLevel.classList.add("hide");
        mediumLevel.classList.add("hide");
        hardLevel.classList.remove("hide");
    }
    resetGame();
}

for (let i = 0; i < levelSelectors.length; i++) {
    levelSelectors[i].addEventListener("click", selectLevel); // Add an onclick to select the level
}

sortColors();

let cardOne;
let cardTwo;
let cardOneColor;
let cardTwoColor;
let busy = false;
const winModal = document.getElementById("winModal");

function checkWin() {
    if (selectedLevel == "easy" && score == 8) {
        winModal.style.display = "block";
    } else if (selectedLevel == "medium" && score == 10) {
        winModal.style.display = "block";
    } else if (selectedLevel == "hard" && score == 12) {
        winModal.style.display = "block";
    }
    pushScore();
}

function flipCard() {
    if (!busy) {
        busy = true;
        this.classList.remove("card-back"); // On click, flip the card
        if (j % 2 != 0) {
            cardOne = this.id;
            cardOneColor = document.getElementById(cardOne).style.backgroundColor;
            j++;
            pushMoves();
            busy = false;
        } else {
            cardTwo = this.id;
            cardTwoColor = document.getElementById(cardTwo).style.backgroundColor;
            if (cardOne != cardTwo) {
                j++;
                pushMoves();
            }
            setTimeout(function () {
                if (cardOneColor == cardTwoColor && cardOne != cardTwo) {
                    document.getElementById(cardOne).style.backgroundColor = "transparent";
                    document.getElementById(cardTwo).style.backgroundColor = "transparent";
                    score++;
                    checkWin();
                } else {
                    document.getElementById(cardOne).classList.add("card-back");
                    document.getElementById(cardTwo).classList.add("card-back");
                }
                busy = false;
            }, 1000);
        }
    }
    pushScore();
}

let scoreArea = document.getElementById("score");
// this variable is added for scores submition form
let scoresFormLevel = document.getElementById("level")

function pushScore() {
    if (selectedLevel == "easy") {
        scoreArea.innerText = `${score} / 8`;
        scoresFormLevel.value = 'easy';
    } else if (selectedLevel == "medium") {
        scoreArea.innerText = `${score} / 10`;
        scoresFormLevel.value = 'medium';
    } else if (selectedLevel == "hard") {
        scoreArea.innerText = `${score} / 12`;
        scoresFormLevel.value = 'hard';
    }
}
// this variable is added for scores submition form
let scoresFormMoves = document.getElementById("moves")

function pushMoves() {
    document.getElementById("movescounter").innerHTML = `moves: ${j - 1}`;
    document.getElementById("moves").value = j - 1
}

// switch off the restet game and let django reset the game by reloading url after form submittions
// let resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", resetGame);

function resetGame() {
    j = 1;
    score = 0;
    winModal.style.display = "none";
    resetCards();
    sortColors();
    pushScore();
    pushMoves();
};

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", function () {
    winModal.style.display = "none";
});

let replayButton = document.getElementById("replay");

replayButton.addEventListener("click", resetGame);