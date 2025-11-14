let playerScore = 0;
let computerScore = 0;
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
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}