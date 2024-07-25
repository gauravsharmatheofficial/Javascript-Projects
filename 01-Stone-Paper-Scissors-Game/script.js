let userScore = 0;
let comScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
const drawScorePara = document.querySelector("#draw-score");
const userImage = document.querySelector("#user-img");
const comImage = document.querySelector("#com-img");
const comChoiceText = document.querySelector("#com-choice");
const userChoiceText = document.querySelector("#user-choice");
const leftDiv = document.querySelector(".left-div");
const rightDiv = document.querySelector(".right-div");

const setChoiceText = (comChoice, userChoice) => {
  comChoiceText.innerHTML = comChoice;
  userChoiceText.innerHTML = userChoice;
};

const scoreBoard = (userWin) => {
  if (userWin) {
    userScore += 1;
    userScorePara.innerHTML = userScore;
    leftDiv.style.backgroundColor = "rgb(64, 8, 8,0.7)";
    rightDiv.style.backgroundColor = "rgb(72, 97, 37,0.7)";
  } else {
    comScore += 1;
    comScorePara.innerHTML = comScore;
    rightDiv.style.backgroundColor = "rgb(64, 8, 8,0.7)";
    leftDiv.style.backgroundColor = "rgb(72, 97, 37,0.7)";
  }
};

const genComChoice = () => {
  const choice = ["rock", "paper", "scissor"];
  const comChoice = choice[Math.floor(Math.random() * 3)];
  comImage.src = `./Images/${comChoice}.png `;
  return comChoice;
};

const playGame = (userChoice) => {
  const comChoice = genComChoice();

  if (userChoice === comChoice) {
    drawScore += 1;
    drawScorePara.innerHTML = drawScore;
    rightDiv.style.backgroundColor = "#ffb289";
    leftDiv.style.backgroundColor = "#ffb289";
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissor" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    scoreBoard(userWin);
  }
  setChoiceText(comChoice, userChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    userImage.src = `./Images/${userChoice}.png `;
    playGame(userChoice);
  });
});
