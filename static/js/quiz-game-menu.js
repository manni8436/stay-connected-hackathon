// Modal - Credit Florin Pop Youtube video guide, walkthrough helped create modal and code was used and modified for project
const openModalButton = document.getElementById("open-modal-button");
const howToModalContainer = document.getElementById("how-to-modal-container");
const closeButtonInModal = document.getElementById("close");

openModalButton.addEventListener("click", () => {
    howToModalContainer.classList.add("show");
});

closeButtonInModal.addEventListener("click", () => {
    howToModalContainer.classList.remove("show");
});

const startButton = document.getElementById("start-btn");
// const contactUsButton = document.getElementById("contact-btn");
const welcomeHeading = document.getElementById("welcome-heading");
const welcomeIntro = document.getElementById("welcome-intro");

// // Contact us button
// contactUsButton.onclick = function() {
//     location.href = "contact.html";
// };

// Start Game - opens game.html page on click
startButton.onclick = function() {
    location.href = "/games/quizanaughts/game";
};

// Intro text for quiz
welcomeHeading.innerText = "Are you ready space adventurers?";
welcomeIntro.innerText = "Put your wits and knowledge to the test and play the Quizanaughts space quiz. Good luck!";