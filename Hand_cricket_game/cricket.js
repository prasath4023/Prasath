let score = 0;
let isGameOver = false;

const playButton = document.getElementById("playButton");
const restartButton = document.getElementById("restartButton");
const userChoiceInput = document.getElementById("userChoice");
const statusText = document.getElementById("status");
const scoreText = document.getElementById("score");
const resultText = document.getElementById("result");
const gameResult = document.getElementById("gameResult");
const gameInfo = document.getElementById("gameInfo");

playButton.addEventListener("click", playTurn);

restartButton.addEventListener("click", restartGame);

function playTurn() {
  const userChoice = parseInt(userChoiceInput.value);

  if (isNaN(userChoice) || userChoice < 1 || userChoice > 6) {
    alert("Please enter a number between 1 and 6.");
    return;
  }

  if (isGameOver) return;

  const computerChoice = Math.floor(Math.random() * 6) + 1;

  console.log(`🏏 Batter played: ${userChoice}`);
  console.log(`🎯 Bowler bowled: ${computerChoice}`);

  if (userChoice === computerChoice) {
    statusText.textContent = "❌ You are OUT!";
    resultText.textContent = `Final Score: ${score} runs 🏏`;
    gameResult.style.display = "block";
    gameInfo.style.display = "none";
    isGameOver = true;
  } else {
    score += userChoice;
    scoreText.textContent = `Score: ${score} runs`;
    statusText.textContent = `Bowler's s: ${computerChoice} | Keep Playing!`;

    userChoiceInput.value = "";
  }
}

function restartGame() {
  score = 0;
  isGameOver = false;
  gameResult.style.display = "none";
  gameInfo.style.display = "block";
  statusText.textContent = "Game in Progress...";
  scoreText.textContent = `Score: ${score}`;
  userChoiceInput.value = "";
}
