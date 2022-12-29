function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    let choice;
    
    if(number == 0)
    {
        choice = "rock";
    }

    else if(number == 1)
    {
        choice = "paper";
    }

    else if(number == 2)
    {
        choice = "scissor";
    }

    return choice;
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissor" && computerSelection == "paper")) {
        console.log("player wins");
        return "player wins";
    }

    else if(playerSelection == computerSelection) {
        return "Tie";
    }

    else {
        console.log("computer wins");
        return "computer wins";
    }
}

function game() {
    let player;
    let computer;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    let roundPlayed = 0;

    for (let i = 0; i < 5; i++) {
        roundPlayed++;
        console.log("Round: ", roundPlayed);
        computer = getComputerChoice();
        console.log("Computer choice: ", computer);
        player = prompt("Rock, Paper, or Scissor");
        roundResult = playRound(player, computer);

        if (roundResult == "player wins"){
            playerScore++;
        }
        else if (roundResult == "computer wins") {
            computerScore++;
        }
        else {
            console.log("It was a tied round, redo round");
            if(i > 0) {
                i--;
            }
            else {
                i = 0;
            }
            roundPlayed--;
        }
        console.log("Score: ", playerScore, "-", computerScore);
        console.log("");
    }

    if (playerScore > computerScore) {
        console.log("YOU WON");
    }

    else if (playerScore < computerScore) {
        console.log("YOU LOST");
    }

    else {
        console.log("NOBODY WON");
    }
}

game();