let playerChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
playerChoice = playerChoice.substring(0, 1).toUpperCase() + playerChoice.substring(1, playerChoice.length)
const computerChoice = getComputerChoice();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    const winPhrase = `You Win! ${playerSelection} beats ${computerSelection}`;
    const losePhrase = `You Lose! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return `Draw! You both threw ${playerSelection}`
    }

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return losePhrase;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return winPhrase;
    }

    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return losePhrase;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return winPhrase;
    }

    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return losePhrase;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return winPhrase;
    }
}
console.log(playRound(playerChoice, computerChoice))

