function getComputerChoice () {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computersChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("The Computer has chosen: " + computersChoice);
    return computersChoice
}
function playRound (playersPick) {
    playersPick = playersPick.currentTarget.textContent;
    let outputText = "";
    let computerSelection = getComputerChoice();
    if (computerSelection == playersPick) {
        outputText += "It's a tie!";
    }

    else if (computerSelection == "PAPER" && playersPick == "ROCK") {
        outputText += "You lose! Paper Beats Rock";
    }

    else if (computerSelection == "PAPER" && playersPick == "SCISSORS") {
        outputText += "You win! Scissors beats Paper";
    }

    else if (computerSelection == "SCISSORS" && playersPick == "ROCK"){
        outputText += "You win! Rock beats Scissors";
    }

    else if (computerSelection == "SCISSORS" && playersPick == "PAPER") {
        outputText += "You lose! Scissors beats Paper";
    }

    else if (computerSelection == "ROCK" && playersPick == "SCISSORS") {
        outputText += "You lose! Rock beats Scissors";
    }
    else if (computerSelection == "ROCK" && playersPick == "PAPER") {
        outputText += "You win! Paper beats Rock";
    }
    else {
        outputText += "No Contest. Next time enter Rock, Paper, or Scissors.";
    }
    document.getElementById("outputResponse").textContent = outputText;
    if (outputText.includes("You lose!") == true) {
        let computersUpdatedScore = parseInt(document.getElementById('computerScore').textContent) + 1;
        document.getElementById('computerScore').textContent = computersUpdatedScore;
        if (computersUpdatedScore == 5) {
            alert("RIP: You've lost this match");
        }
    }
    else if (outputText.includes("You win!") == true) {
        let yourUpdatedScore = parseInt(document.getElementById('yourScore').textContent) + 1;
        document.getElementById('yourScore').textContent = yourUpdatedScore;
        if (yourUpdatedScore == 5) {
            alert("Congrats! You've won the match")
        }

    }
    else if (outputText.includes("It's a tie!")) {
        let tiedUpdatedScore = parseInt(document.getElementById('tiedScore').textContent) + 1;
        document.getElementById('tiedScore').textContent = tiedUpdatedScore;
    }
}
function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    while (wins < 5 && losses < 5) {
        let result = playRound
    }
    div.textContent("You've won " + wins + " times, lost " + losses + " times, and tied " + ties + " times.");
}
const div = document.createElement('div');
div.setAttribute('id', 'outputResponse');

const scores = document.createElement('div');
const yourScore = document.createElement('div');
yourScore.setAttribute('id','yourScore')
yourScore.textContent = 0;

const computerScore = document.createElement('div');
computerScore.setAttribute('id','computerScore');
computerScore.textContent = 0;

const tiedScore = document.createElement('div');
tiedScore.setAttribute('id', 'tiedScore');
tiedScore.textContent = 0;

const rock = document.createElement('button');
rock.setAttribute('id','rock');
rock.textContent = 'ROCK';
rock.addEventListener('click', playRound);

const paper = document.createElement('button');
paper.setAttribute('id','paper');
paper.textContent = 'PAPER';
paper.addEventListener('click', playRound);

const scissors = document.createElement('button');
scissors.setAttribute('id','scissors');
scissors.textContent = 'SCISSORS';
scissors.addEventListener('click', playRound);



const body = document.querySelector('body');
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(div);
body.appendChild(scores);
scores.appendChild(yourScore);
scores.appendChild(computerScore);
scores.appendChild(tiedScore);

// to do: inside the playround function, call another function that will keep sccores
// and output what it is we need and whatnot.