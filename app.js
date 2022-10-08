const choices = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

function playRound() {
  const playerSelection = capitalize(prompt("Enter rock, paper or scissors:"));
  const computerSelection = getComputerChoice();

  if (choices.indexOf(playerSelection) === -1) {
    return `Invalid input`;
  }

  if (playerSelection === computerSelection) {
    return `Draw! You both threw ${playerSelection}`;
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerWinCount++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerWinCount++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function resetWinCount() {
  playerWinCount = 0;
  computerWinCount = 0;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (playerWinCount === computerWinCount) {
    resetWinCount();
    return `It's a draw!`;
  } else if (playerWinCount > computerWinCount) {
    resetWinCount();
    return `Player Wins!`;
  } else {
    resetWinCount();
    return `Computer Wins!`;
  }
}
console.log(game());
