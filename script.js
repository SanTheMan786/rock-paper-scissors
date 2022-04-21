let player = 0;
let computer = 0;

function random() {
  return Math.floor(Math.random() * 3) + 1;
}

// console.log(random());
// console.log(typeof random());

function computerPlay() {
  const number = random();
  if (number === 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// console.log(computerPlay());

function playerPlay() {
  const number = parseInt(
    prompt("Type 1 for rock, 2 for paper or 3 for scissors")
  );
  if (number === 1) {
    return "Rock";
  } else if (number == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // console.log(playerSelection, computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    player++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("You Lose! Rock beats Scissors");
    computer++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    player++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("You Lose! Scissors beats Paper");
    computer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    player++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("You Lose! Paper beats Rock");
    computer++;
  } else {
    console.log("It's a Draw!");
  }
}

function game() {
  const playerSelection = playerPlay().toLowerCase();
  const computerSelection = computerPlay().toLowerCase();
  playRound(playerSelection, computerSelection);
}

while (true) {
  game();
  if (player === 5 || computer === 5) {
    if (player > computer) {
      console.log("Player Won!");
      break;
    } else {
      console.log("Computer Won!");
      break;
    }
  }
}
