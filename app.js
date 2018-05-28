// -------GLOBAL VARIABLES--------
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function to generate random selection for computer choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//Change letters to words to make more readable
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const user_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = computerScore; 
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)} - You win!!`;
  user_div.classList.add('green-glow');
  //function syntax using ES6
  setTimeout(() => user_div.classList.remove('green-glow'), 500);
}

function lose(user, computer) {
  const user_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = computerScore; 
  result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)} - You lose!!`;
  user_div.classList.add('red-glow');
  setTimeout(function() {user_div.classList.remove('red-glow') }, 500); 
}

function draw(user, computer) {
  const user_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(user)} against ${convertToWord(computer)} - It's a draw!!`; 
  user_div.classList.add('gray-glow');
  setTimeout(function() {user_div.classList.remove('gray-glow') }, 500);
}

//function to handle user's choice
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {  
  rock_div.addEventListener('click', function() {
    game('r');
  })
  
  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })
};

main();