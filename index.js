const cardsValues = document.getElementById("cardsValues");
const cardsSum = document.getElementById("cardsSum");
const statusMessage = document.getElementById("statusMessage");
const playerCount = document.getElementById("playerCount");

let message = "";
let color = "";
let isAlive = false;

const player = {
  name: "Per",
  count: 200,
};

let cardsArr = [];
let sum = 0;
let bet = 10;

playerCount.textContent = `${player.name}: ${player.count} $`;

function createRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function getArrSum(arr) {
  sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
}

function updateCardsDisplay() {
  cardsValues.textContent = `Cards: ${cardsArr.join(" ")}`;
  cardsSum.innerText = `Sum: ${sum}`;
  playerCount.innerText = `Per: ${player.count} $`;
}

function checkGameState() {
  if (sum === 21) {
    message = "You've got Blackjack";
    color = "green";
    player.count += bet * 8;
    isAlive = false;
  } else if (sum > 21) {
    message = "You are out of the game";
    color = "#d93043";
    isAlive = false;
  } else {
    message = "Do you want to draw a new card or game?";
    color = "#276ce3";
    isAlive = true;
  }
  statusMessage.innerText = message;
  statusMessage.style.color = color;
  playerCount.innerText = `Per: ${player.count} $`;
}

function startGame() {
  if (player.count < bet) {
    statusMessage.innerText = "Game Over! You don't have enough money.";
    statusMessage.style.color = "#d93043";
    isAlive = false;
    return;
  }
  cardsArr = [];
  sum = 0;
  player.count -= bet;
  cardsArr.push(createRandomNumber(), createRandomNumber());
  getArrSum(cardsArr);
  updateCardsDisplay();
  checkGameState();
}

function getNewCard() {
  if (isAlive) {
    cardsArr.push(createRandomNumber());
    getArrSum(cardsArr);
    updateCardsDisplay();
    checkGameState();
  }
}
