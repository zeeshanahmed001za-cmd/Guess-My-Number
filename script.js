const GuessInput = document.querySelector("#guessInput");
const GuessBtn = document.querySelector("#guessBtn");
const resetBtn = document.querySelector("#reset");
const attemptsDisplay = document.querySelector("#attempts");

const messageDisplay = document.querySelector("#message");

let secretNumber;
let attempts;

function generateSecreteNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startgame() {
    secretNumber = generateSecreteNumber();
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    messageDisplay.textContent = '';
    GuessInput.value = "";
    GuessInput.disabled = false;
    GuessBtn.disabled = false
}
startgame();

function checkGuess() {
    const guess = Number(GuessInput.value);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        messageDisplay.textContent = "Enter a whole number between 1-100";
        return;
    }
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        messageDisplay.textContent = `Correct! you won in ${attempts} attempts`;
        GuessInput.disabled = true;
        GuessBtn.disabled = true;
    } else if (guess < secretNumber) {
        messageDisplay.textContent = "too low. Try again";
    } else {
        messageDisplay.textContent = "too High. Try again";
    }
    GuessInput.value = "";
}
GuessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', startgame);

