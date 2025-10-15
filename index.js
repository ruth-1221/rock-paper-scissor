const resultDiv = document.getElementById('result');
const winnerDiv = document.getElementById('winner');
const scoreDiv = document.getElementById('score');

winnerDiv.style.backgroundColor='lightgreen';
winnerDiv.style.fontWeight ='bold';
winnerDiv.style.fontSize ='30px';
scoreDiv.style.backgroundColor='yellow';
scoreDiv.style.fontSize ='30px';


let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(userChoice){
  const choose = ['rock', 'paper', 'scissors'];
  
  const computerChoice = choose[Math.floor(Math.random() * choose.length)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  // Display results in the browser, not in the console
  resultDiv.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  scoreDiv.textContent = `Your score: ${playerScore} | Computer score: ${computerScore}`;

  if(playerScore === 5 || computerScore === 5){
    gameOver = true;
    
  winnerDiv.textContent = playerScore === 5
      ? "🎉 You won the game!"
      : "💻 Computer won the game!";

    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
}
}
