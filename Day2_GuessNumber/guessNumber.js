let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const scoreDisplay = document.getElementById("score");
const highscoreDisplay = document.getElementById("highscore");
const questionBox = document.getElementById("questionBox");
const body = document.body;

function displayMessage(msg) {
  message.textContent = msg;
}

checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage(" No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    questionBox.textContent = secretNumber;
    body.style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = `Highscore: ${highscore}`;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " Too high!" : "Too low!");
      score--;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      displayMessage(" You lost the game!");
      scoreDisplay.textContent = "Score: 0";
      body.style.backgroundColor = "red";
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  questionBox.textContent = "?";
  displayMessage("Start guessing...");
  scoreDisplay.textContent = `Score: ${score}`;
  guessInput.value = "";
  body.style.backgroundColor = "black"; 
});
