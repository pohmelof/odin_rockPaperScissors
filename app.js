const choices = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection = "";
let computerSelection = "";
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const messageEl = document.querySelector(".message");
let message = "";

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach((choice) => choice.addEventListener("click", playRound));
function playRound(event) {
  playerSelection = event.target.dataset.set;
  computerSelection = getComputerChoice();
  determineWinner(playerSelection, computerSelection);
  computerScore.innerText = computerWinCount;
  playerScore.innerText = playerWinCount;
  messageEl.innerText = message;
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    message = `Draw! You both threw ${playerSelection}`;
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerWinCount++;
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerWinCount++;
    message = `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function resetWinCount() {
  playerWinCount = 0;
  computerWinCount = 0;
}
