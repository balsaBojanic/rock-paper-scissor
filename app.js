let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
const gamesPerRound = 5;
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function playGame(playerChoice) {
    if (gamesPlayed >= gamesPerRound) {
        return; 
    }
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('result').textContent = result;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    gamesPlayed++;
    document.getElementById('game-counter').textContent = `Game ${gamesPlayed} of ${gamesPerRound}`;
    if (gamesPlayed >= gamesPerRound) {
        endRound();
    }
}
function endRound() {
    let roundResult = "";
    if (playerScore > computerScore) {
        roundResult = "You won the round!";
    } else if (computerScore > playerScore) {
        roundResult = "Computer won the round!";
    } else {
        roundResult = "The round ended in a tie!";
    }
    
    document.getElementById('round-result').textContent = roundResult;
    document.getElementById('reset-button').style.display = 'block';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    
    document.getElementById('result').textContent = "Make your choice to start the round!";
    document.getElementById('computer-choice').textContent = "";
    document.getElementById('score').textContent = "Player: 0 | Computer: 0";
    document.getElementById('game-counter').textContent = `Game 0 of ${gamesPerRound}`;
    document.getElementById('round-result').textContent = "";
    document.getElementById('reset-button').style.display = 'none';
}