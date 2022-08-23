function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    randIndex = Math.floor(Math.random() * 3);;
    return choices[randIndex];
}

function playRound(player, computer) {
    player = player.toString();
    player = player.toLowerCase();
    
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (round = 0; round < 5; round++) {
        let playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        if (winner == 'error') {
            round--;
            alert('Invalid input');
            continue;
        } else if (winner == 'player') {
            playerScore++;
        } else if (winner == 'computer') {
            computerScore++;
        } else {
            ties++;
        }
    }
    alert(`Player score: ${playerScore}\nComputer score: ${computerScore}\nTies: ${ties}`)
}

game();