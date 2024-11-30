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
	if (winner == 'player') {
		playerScore++;
	} else if (winner == 'computer') {
		computerScore++;
	} else {
		ties++;
	}
	scoreDisplay.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}`;
}

function updateBattle(playerSelection, compChoice) {
	playerChoiceCard.innerHTML = `<img src='imgs/${playerSelection.toLowerCase()}.svg'>`;
	compChoiceCard.innerHTML = `<img class='compChoiceImg' src='imgs/${compChoice.toLowerCase()}.svg'>`;
}

// Appends game result to score log
function checkWinner(playerScore, computerScore, ties) {
	let newLog = document.createElement('li');
	let winner = 'none';
	if (playerScore >= 5) {
		winner = 'player';
	} else if (computerScore >= 5) {
		winner = 'computer';
	}
	return winner;
}

function resetGame(winner) {
	if (winner == 'none') return;
	playerScore = 0;
	computerScore = 0;
	ties = 0;
	scoreDisplay.textContent = 'Player score: 0 Computer score: 0 Ties: 0';
	if (winner == 'tie') {
		victoryModal.textContent = "It's a tie game! Better luck next time.";
	} else if (winner == 'computer') {
		victoryModal.textContent = `The winner is the Computer! Ouch, embarrassing honestly`;
	} else {
		victoryModal.textContent = `Congratulations! You're the winner!`;
	}
	resetButton = document.createElement('button');
	resetButton.textContent = 'Reset Game';

	resetButton.addEventListener('click', () => {
		contentWrapper.classList.remove('blur');
		victoryModal.classList.add('hidden');
		updateBattle(resetImg, resetImg);
		victoryModal.close();
	});
	victoryModal.appendChild(resetButton);
	contentWrapper.classList.add('blur');
	victoryModal.showModal();
	victoryModal.classList.remove('hidden');
}

function checkMark(winner) {
	if (winner == 'player') {
		winner = playerChoiceCard;
	} else if (winner == 'computer') {
		winner = compChoiceCard;
	} else return;
	const mark = document.createElement('img');
	mark.src = 'imgs/check.svg';
	mark.classList.add('checkmark');
	mark.classList.add('checkmark_flash');
	winner.appendChild(mark);
}

function disableButtons() {
	buttons.forEach((button) => {
		button.disabled = true;
		setTimeout(() => (button.disabled = false), 500);
	});
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;
const resetImg = 'question-mark';
const scoreDisplay = document.querySelector('.scoreDisplay');
const battleContainer = document.querySelector('.battleContainer');
const playerChoiceCard = document.getElementById('playerCard');
const compChoiceCard = document.getElementById('compCard');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const playerSelection = button.id;
		const compChoice = getComputerChoice();
		const roundWinner = playRound(playerSelection, compChoice);
		updateBattle(playerSelection, compChoice);
		checkMark(roundWinner);
		disableButtons();
		updateScore(roundWinner, playerSelection, compChoice);
		const gameWinner = checkWinner(playerScore, computerScore, ties);
		resetGame(gameWinner);
	});
});
