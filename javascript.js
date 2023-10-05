function getComputerChoice () {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("The Computer has chosen: " + computersChoice);
    return computersChoice
}
function roundOfRPS () {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Time for a round of Rock-Paper-Scissors. Please enter your choice.").toUpperCase();
    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }

    else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        return "You lose! Paper Beats Rock";
    }

    else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        return "You win! Scissors beats Paper";
    }

    else if (computerSelection == "SCISSORS" && playerSelection == "ROCK"){
        return "You win! Rock beats Scissors";
    }

    else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        return "You lose! Scissors beats Paper";
    }

    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        return "You lose! Rock beats Scissors";
    }
    else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        return "You win! Paper beats Rock";
    }
    else {
        return "No Contest. Next time enter Rock, Paper, or Scissors."
    }
}
function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++)
    {
        let result = roundOfRPS();
        if (result.includes("You lose!") == true) {
            losses++;
        }
        else if (result.includes("You win!") == true) {
            wins++;
        }
        else if (result.includes("It's a tie!") == true) {
            ties++;
        }
    }
    console.log("You've won " + wins + " times, lost " + losses + " times, and tied " + ties + " times.")
}

game();
