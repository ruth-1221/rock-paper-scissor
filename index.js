

function getHumanChoice(){
    let choose = prompt("What do you want to choose ('rock', 'paper', 'scissors')");
    choose = choose.trim().toLowerCase();
    return choose;
    
}


function getComputerChoice(){
    let game = ['rock', 'paper', 'scissors'];  
    let gamearray = Math.floor(Math.random()*game.length);
   
   return game[gamearray];
}    


function playGame(){
  let humanScore = 0;
  let  computerScore = 0;
  function playRound(humanSelection, computerSelection){
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);



    if (humanSelection === "rock") {
      if (computerSelection === "rock") {
        console.log("It's a tie! Both chose Rock.");

      } else if (computerSelection === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");

      } else if (computerSelection === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
      }

    } else if (humanSelection === "paper") {

      if (computerSelection === "paper") {
        console.log("It's a tie! Both chose Paper.");

      } else if (computerSelection === "rock") {
        humanScore++
        console.log("You win! paper beats rock")

      } else if (computerSelection === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
      }

    } else if (humanSelection === "scissors") {

      if (computerSelection === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors.");

      } else if (computerSelection === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");

      } else if (computerSelection === "scissors") {
        console.log("It's a tie! Both chose Scissors.");
      }

    } else {
      console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");

    }
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
  }

  

  let choices = ['rock', 'paper', 'scissors']; 
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      console.log(`Round ${i + 1}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }

    // Final score
    console.log(`Final Score - Player: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }

}
playGame();

  

