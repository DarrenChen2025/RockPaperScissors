function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3)
    let choice;
    
    if(number == 0)
    {
        choice = "rock"
    }

    else if(number == 1)
    {
        choice = "paper"
    }

    else if(number == 2)
    {
        choice = "scissor"
    }

    return choice
}

function playRound()
{
    let roundsPlayed = 0
    let computerScore = 0
    let playerScore = 0
    
    while(roundsPlayed != 5)
    {
        playerSelection = prompt("Choose Rock, Paper, or Scissor")
        computerSelection = getComputerChoice()
        playerSelection = playerSelection.toLowerCase()
        if(playerSelection == computerSelection)
        {
            console.log("It is a tie")
        }

        else if(playerSelection == "rock") 
        {
            if(computerSelection == "scissors")
            {
                console.log("Player wins")
                playerScore++
            }

            else
            {
                console.log("Computer wins")
                computerScore++
            }
            console.log(playerScore, '-', computerScore)
        }

        else if(playerSelection == "paper")
        {
            if(computerSelection == "rock")
            {
                console.log("Player wins")
                playerScore++
            }

            else
            {
                console.log("Computer wins")
                computerScore++
            }
            console.log(playerScore, '-', computerScore)
            }

        else if(playerSelection == "scissor")
        {
            if(computerSelection == "paper")
            {
                console.log("Player wins")
                playerScore++
            }

            else
            {
                console.log("Computer wins")
                computerScore++
            }
            console.log(playerScore, '-', computerScore)
            }
        roundsPlayed++
    }

    if(playerScore > computerScore)
    {
        console.log("Congrats You Won!")
    }

    if(computerScore > playerScore)
    {
        console.log("You Lost")
    }

    else
    {
        console.log("Tie")
    }

}

playRound();
