function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}

function playRound(player, computer) {
  player = player.toString();
  player = player.toLowerCase();
  computer = computer.toLowerCase();

  // Return player/computer/tie for who wins
  if (player == 'rock') {
    if (computer == 'rock') {
      return 'tie';
    } else if (computer == 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (player == 'paper') {
    if (computer == 'rock') {
      return 'player';
    } else if (computer == 'paper') {
      return 'tie';
    } else {
      return 'computer';
    }
  } else if (player == 'scissors') {
    if (computer == 'rock') {
      return 'computer';
    } else if (computer == 'paper') {
      return 'player';
    } else {
      return 'tie';
    }
  } else {
    return 'error';
  }
}

// updates running score and inputs round into score log
function updateScore(winner, playerSelection, compChoice) {
  let newLog = document.createElement('li');
  if (winner == 'player') {
    playerScore++;
    newLog.textContent += `Player scores with ${playerSelection} over ${compChoice}`;
  } else if (winner == 'computer') {
    computerScore++;
    newLog.textContent += `Computer scores with ${compChoice} over ${playerSelection}`;
  } else {
    ties++;
    newLog.textContent += `A tied point! Both players chose ${playerSelection}`;
  }
  scoreLog.appendChild(newLog);
  scoreDisplay.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}`;
}

function updateBattle(playerSelection, compChoice) {
	const playerCard = document.getElementById('playerCard');
	const compCard = document.getElementById('compCard');
	playerCard.innerHTML = `<img src='imgs/${playerSelection.toLowerCase()}.svg'>`;
	compCard.innerHTML = `<img class='compChoiceImg' src='imgs/${compChoice.toLowerCase()}.svg'>`;
}

// Appends game result to score log
function checkWinner(playerScore, computerScore, ties) {
  let newLog = document.createElement('li');
  if (playerScore >= 5) {
    newLog.textContent += `Player wins!`;
    scoreLog.appendChild(newLog);
  } else if (computerScore >= 5) {
    newLog.textContent += `Computer wins!`;
    scoreLog.appendChild(newLog);
  } else if (ties >= 5) {
    newLog.textContent += `The game is a tie!`;
    scoreLog.appendChild(newLog);
  }
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;
const scoreDisplay = document.querySelector('.scoreDisplay');
const scoreLog = document.querySelector('#scoreLog');
const battleContainer = document.querySelector('.battleContainer');
const playerChoiceCard = document.getElementById('playerCard');
const comChoiceCard = document.getElementById('comCard');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const playerSelection = button.id;
		const compChoice = getComputerChoice();
		const winner = playRound(playerSelection, compChoice);
		// Disable buttons
		// Play countdown
		// When countdown end reveal comp choice
		// Display win/lose/draw
		// Re-enable buttons

		updateBattle(playerSelection, compChoice);
		updateScore(winner, playerSelection, compChoice);
		checkWinner(playerScore, computerScore, ties);
	});
});
