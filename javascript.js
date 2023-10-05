function getComputerChoice () {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("The Computer has chosen: " + computersChoice);
    return computersChoice
}
function roundOfRPS () {
    let computerSelection = getComputerChoice();
    let playerSelection = toUpperCase(prompt("Time for a round of Rock-Paper-Scissors. Please enter your choice."));
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
        return "You lose. Scissors beats Paper";
    }

    else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        return "You lose! Rock beats Scissors";
    }
    else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        return "You win! Paper beats Rock";
    }
}

console.log(roundOfRPS());
