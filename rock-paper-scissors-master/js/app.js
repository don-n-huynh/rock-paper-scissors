const choices = ["paper", "rock", "scissors"];

const buttons = document.querySelectorAll(".btn-circle");
const scoreElement = document.querySelector(".score__number");

let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

function checkWinner() {
  const computerChoice = pickChoices;

  if (userChoice === computerChoice) {
    //draw
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    // user won
  } else {
    updateScore(-1);
    // user lose
  }
}

function updateScore(value) {
  score += value;
  scoreElement.innerText = score;
}

function pickChoices() {
  return choices[Math.floor(Math.random() * choices.length)];
}
