const GuessInput = document.querySelector("#guessInput");
const GuessBtn = document.querySelector("#guessBtn");
const resetBtn = document.querySelector("#reset");
const attemptsDisplay = document.querySelector("#attempts");
const body = document.body;
const messageDisplay = document.querySelector("#message");
const scoreDisplay = document.querySelector("#highScore");

let secretNumber;
let attempts = 10;
let highestScore = null;

function generateSecreteNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function startgame() {
  secretNumber = generateSecreteNumber();

  attemptsDisplay.textContent = attempts;
  messageDisplay.textContent = "";
  GuessInput.value = "";
  GuessInput.disabled = false;
  GuessBtn.disabled = false;
}
startgame();

function checkGuess() {
  const guess = Number(GuessInput.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    messageDisplay.textContent = "Enter a whole number between 1-100";
    return;
  }
  attempts--;

  if (guess === secretNumber) {
    messageDisplay.textContent = `Correct!🎊 you won in ${10 - attempts} attempts.`;
    GuessInput.disabled = true;
    GuessBtn.disabled = true;
    body.style.backgroundColor = "lightgreen";
    if (highestScore === null || 10 - attempts < highestScore) {
      highestScore = 10 - attempts;
      scoreDisplay.textContent = `Highest Score: ${highestScore}`;
    } else if (attempts === 0) {
      messageDisplay.textContent = `Game over🥲! The Number was ${secretNumber}`;
      GuessInput.disabled = true;
      GuessBtn.disabled = true;
    }
  } else if (guess < secretNumber) {
    messageDisplay.textContent = "too low. Try again";
  } else {
    messageDisplay.textContent = "too High. Try again";
  }
  attemptsDisplay.textContent = `${attempts}`;
  GuessInput.value = "";
}
GuessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", startgame);
