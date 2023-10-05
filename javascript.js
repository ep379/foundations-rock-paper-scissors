function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"]
    let computersChoice = choices[Math.floor(Math.random() * choices.length)]
    // console.log(computersChoice)
    return computersChoice
}

getComputerChoice()