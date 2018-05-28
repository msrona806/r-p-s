// -------GLOBAL VARIABLES--------
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function to generate random selection for computer choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//function to handle user's choice
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("computer chose " + computerChoice)
  console.log("you chose " + userChoice)
}

function main() {  
  rock_div.addEventListener('click', function() {
    game('r');
    console.log("You clicked rock!");
  })
  
  paper_div.addEventListener('click', function() {
    game('p');
    console.log("You clicked paper!");
  })

  scissors_div.addEventListener('click', function() {
    game('s');
    console.log("You clicked scissors!");
  })
};

main();