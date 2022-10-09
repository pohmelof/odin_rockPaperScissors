const choices = ["Rock", "Paper", "Scissors"];
const icons = {
  Rock: "./icons/fist.png",
  Paper: "./icons/toilet-paper.png",
  Scissors: "./icons/scissors.png",
};
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection = "";
let computerSelection = "";
const computerSelectionEl = document.querySelector(".computer-selection");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const messageEl = document.querySelector(".message");
const resetBtn = document.querySelector(".reset");
let message = "";

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach((choice) => choice.addEventListener("click", playRound));
function playRound(event) {
  playerSelection = event.target.parentNode.dataset.set;
  computerSelection = getComputerChoice();
  determineWinner(playerSelection, computerSelection);
  renderRound(event, computerSelection);
  renderWinnerCard(playerWinCount, computerWinCount);
}
resetBtn.addEventListener("click", reset);

function renderRound(e, computerSelection) {
  e.target.parentNode.classList.add("selected");
  setTimeout(() => {
    computerSelectionEl.innerHTML = `<img class="${computerSelection.toLowerCase()}" src=${
      icons[computerSelection]
    } alt ="${computerSelection}" />`;
    setTimeout(() => {
      computerScore.innerText = computerWinCount;
      playerScore.innerText = playerWinCount;
      messageEl.innerText = message;
      e.target.parentNode.classList.remove("selected");
      computerSelectionEl.innerHTML = "";
    }, 1000);
  }, 1000);
}

function renderWinnerCard(playerWins, computerWins) {
  if (playerWins === 5) {
    setTimeout(() => {
      document.querySelector(".winner-block").classList.remove("hidden");
      document.querySelector(".win-message").innerText = "The Winner is You!";
    }, 2000);
  } else if (computerWins === 5) {
    setTimeout(() => {
      document.querySelector(".winner-block").classList.remove("hidden");
      document.querySelector(".win-message").innerText = "You Lost";
    }, 2000);
  }
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

function reset() {
  document.querySelector(".winner-block").classList.add("hidden");
  playerWinCount = 0;
  computerWinCount = 0;
  computerScore.innerText = computerWinCount;
  playerScore.innerText = playerWinCount;
  messageEl.innerText = "";
}
