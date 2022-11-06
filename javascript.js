function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    randIndex = Math.floor(Math.random() * 3);;
    return choices[randIndex];
}

function playRound(player, computer) {
    player = player.toString();
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    
    //return player/computer/tie for who wins
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
    } else if (player == 'scissors'){
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

function updateScore(winner) {
    if (winner == 'player') {
        playerScore++;
    } else if (winner == 'computer') {
        computerScore++;
    } else {
        ties++;
    }
    scoreContainer.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}`
};

function updateBattle(playerSelection, compChoice){
    battleContainer.textContent = `Player Choice: ${playerSelection} Computer Choice: ${compChoice}`
};

function checkWinner(playerScore, computerScore, ties){
    if (playerScore >= 5){
        scoreContainer.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}
        Player wins!`
    } else if (computerScore >= 5){
        scoreContainer.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}
        Computer wins!`
    } else if (ties >= 5) {
        scoreContainer.textContent = `Player score: ${playerScore} Computer score: ${computerScore} Ties: ${ties}
        The game is a tie!`
    }
};

let playerScore = 0;
let computerScore = 0;
let ties = 0;
const scoreContainer = document.querySelector('.scoreContainer');
const battleContainer = document.querySelector('.battleContainer');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let compChoice = getComputerChoice();
        let winner = playRound(playerSelection, compChoice);
        updateBattle(playerSelection, compChoice);
        updateScore(winner);
        checkWinner(playerScore, computerScore, ties);
    
    });
});
