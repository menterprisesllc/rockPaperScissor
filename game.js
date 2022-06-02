const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}
 
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection === "rock") {
            return "Tie";
        } else if (computerSelection == "paper") {
            computerScore++;
            return "Computer Wins";
        } else {
            playerScore++;
            return "Player Wins";
        }
    }

    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection === "paper") {
            return "Tie";
        } else if (computerSelection == "scissors") {
            computerScore++;
            return "Computer Wins";
        } else {
            playerScore++;
            return "Player Wins";
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection === "scissors") {
            return "Tie";
        } else if (computerSelection == "rock") {
            computerScore++;
            return "Computer Wins";
        } else {
            playerScore++;
            return "Player Wins";
        }
    }
    
    playerChoice();
    console.log(computerPlay());
    return "You Lose! Paper beats Rock"
}
playerScore = parseInt(0);
computerScore = parseInt(0);

/*playRound();
/*const playerSelection = playerChoice();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Typer your selection:");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score = ${playerScore}`);
        console.log(`Computer score = ${computerScore}`);         
    }
}
game();

/*function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissor");
    while(input == null) {
        input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {

    }
    if (check == true) {
        console.log(input);
    }
    //console.log(input);
}

function validateInput(choice) {
    return choices.includes(choice);
     
}

function game() {
    playRound();
} 
game();*/





