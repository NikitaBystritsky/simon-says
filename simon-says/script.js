const body = document.body;

//game container
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.appendChild(mainContainer);

//level container
const levelContainer = document.createElement("div");
levelContainer.classList.add("level-container");
mainContainer.appendChild(levelContainer);

//round count
const rounds = document.createElement("div");
rounds.classList.add("rounds");
mainContainer.appendChild(rounds);

//level buttons
const levels = ["easy", "medium", "hard"];
const levelButtons = {};
levels.forEach((level) => {
  const button = document.createElement("button");
  button.textContent = level;
  button.onclick = () => whichLevel(level);
  button.onclick = () => selectLevel(level);
  currentLevel = level;
  levelButtons[level] = button;
  levelContainer.appendChild(button);
});

function selectLevel(level) {
  currentLevel = level;
  Object.values(levelButtons).forEach((button) => {
    button.style.backgroundColor = "";
  });
  levelButtons[level].style.backgroundColor = "green";
  if (currentLevel === "easy") {
    keyboardLetters.classList.add("none");
    keyboardNumbers.classList.remove("none");
  } else if (currentLevel === "medium") {
    keyboardLetters.classList.remove("none");
    keyboardNumbers.classList.add("none");
  } else {
    keyboardLetters.classList.remove("none");
    keyboardNumbers.classList.remove("none");
  }
  showPopup(`Level set to ${level}. Press START to begin.`);
}

//repeat sequence button
const repeatSequence = document.createElement("button");
repeatSequence.classList.add("repeat-btn");
repeatSequence.textContent = "repeat sequence";
repeatSequence.disabled = true;
mainContainer.appendChild(repeatSequence);

//new game button
const newGameButton = document.createElement("button");
newGameButton.classList.add("new-game-btn");
newGameButton.textContent = "new game";
mainContainer.appendChild(newGameButton);
newGameButton.disabled = true;

//sequence container
const sequenceDisplay = document.createElement("div");
sequenceDisplay.textContent = "";
sequenceDisplay.classList.add("display");
mainContainer.appendChild(sequenceDisplay);

//numbers
const keyboardNumbers = document.createElement("div");
keyboardNumbers.classList.add("numbers");
mainContainer.appendChild(keyboardNumbers);

const keyboardKeysNumbers = "1234567890".split("");
const numberButtons = {};
keyboardKeysNumbers.forEach((key) => {
  const button = document.createElement("button");
  button.classList.add("key");
  button.textContent = key;
  keyboardNumbers.appendChild(button);
});

//letters

const keyboardLetters = document.createElement("div");
keyboardLetters.classList.add("letters");
mainContainer.appendChild(keyboardLetters);

const keyboardKeysLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const letterButtons = {};
keyboardKeysLetters.forEach((key) => {
  const button = document.createElement("button");
  button.classList.add("key");
  button.textContent = key;
  keyboardLetters.appendChild(button);
});

//start button
const startButton = document.createElement("button");
startButton.classList.add("start");
startButton.textContent = "START";
startButton.onclick = () => startRound();
mainContainer.appendChild(startButton);

// popup
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
body.appendChild(popupContainer);

const popupMessage = document.createElement('div');
popupMessage.classList.add('popup-message')

// popup close
const closePopupButton = document.createElement('button');
closePopupButton.textContent = '×';
closePopupButton.classList.add('popuip-btn');
closePopupButton.onclick = () => {
  popupContainer.classList.add('none')
};

popupMessage.appendChild(closePopupButton);
popupContainer.appendChild(popupMessage);

function showPopup(message) {
  popupMessage.firstChild.textContent = message;
  popupContainer.style.display = 'flex';
}

//start
lockNumbers();
lockLetters();
let sequence = [];
let playerInput = [];
let round = 0;
let canRepeat = true;
let attemptsLeft = 2;
let inputEnabled = false;
currentLevel = 'hard';


function startRound() {
playerInput = [];
sequenceDisplay.textContent = '';
lockNumbers();
lockLetters();
startButton.classList.add('none');
  if (round >= 5) {
    showPopup('Game over! You completed all 5 rounds.');
    return;
  }
  newGameButton.disabled = false;
  repeatSequence.textContent = "repeat sequence";
  round++;
  updateRoundDisplay();
  const chars =
    currentLevel === "easy"
      ? "1234567890"
      : currentLevel === "medium"
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const newSequence = [];
  for (let i = 0; i < round * 2; i++) {
    newSequence.push(chars[Math.floor(Math.random() * chars.length)]);
    setTimeout(() => {
      unlockNumbers();
      unlockLetters();}, 1250 * (round * 2))
  }
  sequence = [...newSequence];

  repeatSequence.disabled = false;
  canRepeat = true;
  inputEnabled = false;
  disableLevel(currentLevel);
}

function disableLevel(level) {
  currentLevel = level;
  Object.values(levelButtons).forEach((button) => {
    if (button.textContent !== currentLevel){
      button.classList.add('none');
    }
  });
}

function unlockLevel(level) {
  currentLevel = level;
  Object.values(levelButtons).forEach((button) => {
    if (button.textContent !== currentLevel){
      button.classList.remove('none');
    }
  });
}

function unlockLetters(){
  Object.values(letterButtons).forEach((button) => {
    button.disabled = false;
  });
}

function lockLetters(){
  Object.values(letterButtons).forEach((button) => {
    button.disabled = true;
  });
}

function lockNumbers(){
  Object.values(numberButtons).forEach((button) => {
    button.disabled = true;
  });
}

function unlockNumbers(){
  Object.values(numberButtons).forEach((button) => {
    button.disabled = false;
  });
}

function updateRoundDisplay() {
  rounds.textContent = `Round: ${round}/5`;
}