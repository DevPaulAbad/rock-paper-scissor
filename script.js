
let playerScore = 0;
let computerScore = 0;

function playRound(player,computer){
    const rock = '{rock|Rock|rOck|ROCK|}';
    const paper = '{Paper|PAPER|paper}';
    const scissor = '{Scissor|scissor|SCISSOR}';
   
        if(player === computer){
            document.getElementById("computer").innerHTML = "Computer choice " + computer;
            return "Tie!";
        }
        else if(player == 'rock'){
            if(computer == "paper" && player == "rock"){
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return "Computer Wins!";
                
                computerScore++;
            }else{
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return "Player Wins!";
                
                playerScore++;
            }
        }else if(player == "scissor"){
            if(computer == "rock" && player == "scissor"){
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return "Computer Wins!";
                computerScore++;
            }else{
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return 'Player Wins!';
                playerScore++;
            }
        }else if(player == "paper"){
            if(computer == "scissor" && player == "paper"){
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return "Computer Wins!";
                computerScore++;
            }
            else{
                document.getElementById("computer").innerHTML = "Computer choice " + computer;
                return "Player Wins!";
                playerScore++;
            }
        }
        // i++;
        // if(computerScore == 1){
        //     alert("Game Over! Computer Wins!");
        //     i = 0;
        //     computerScore = 0;
        //     playerScore = 0;
        // }
        // else if(playerScore == 5){
        //     alert("Game Over! Player Wins!");
        //     i = 0;
        //     computerScore = 0;
        //     playerScore = 0;
        // }
    
    }



function getComputerChoice(){
    let select = Math.floor(Math.random() *3);
    switch(select){
        case 0: select = "paper";
        break;
        
        case 1: select = "scissor";
        break;

        case 2: select = "rock";
        break;
    }

 return select
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
}



function getPlayerchoice(choice){
const playerSelection = choice;
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
document.getElementById("Winner").innerHTML = playRound(playerSelection, computerSelection);
let i = 0;

    if(playRound(playerSelection, computerSelection) == "Player Wins!"){
        playerScore++;
        if(playerScore == 5){
            alert("Game Over! Player Wins!");
            resetGame();
            document.getElementById("round").innerHTML = "Computer score " + computerScore;
            document.getElementById("playerScore").innerHTML = "Player score " + playerScore;

        } 
        return document.getElementById("playerScore").innerHTML = "Player score " + playerScore;
        
    }else if(playRound(playerSelection, computerSelection) == "Computer Wins!"){
        computerScore++;
        if(computerScore == 5){
            alert("Game Over! Computer Wins!"); 
            resetGame();
            document.getElementById("round").innerHTML = "Computer score " + computerScore;
            document.getElementById("playerScore").innerHTML = "Player score " + playerScore;
        } 
        return document.getElementById("round").innerHTML = "Computer score " + computerScore;
       
    }





}

