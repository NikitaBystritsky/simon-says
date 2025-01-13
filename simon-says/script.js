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
repeatSequence.onclick = () => repeat();
mainContainer.appendChild(repeatSequence);

//new game button
const newGameButton = document.createElement("button");
newGameButton.classList.add("new-game-btn");
newGameButton.textContent = "new game";
newGameButton.onclick = () => resetGame();
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
  button.onclick = () => handleInput(key);
  numberButtons[key] = button;
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
  button.onclick = () => handleInput(key);
  letterButtons[key] = button;
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
  popupContainer.style.display = 'none';
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
      resetGame();
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
    displaySequence();
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

function displaySequence() {
  let index = 0;

  const interval = setInterval(() => {
    if (index >= sequence.length) {
      clearInterval(interval);
      inputEnabled = true;
      return;
    }

    const char = sequence[index];
    highlightKey(char);

    setTimeout(() => {
      unhighlightKey(char);
    }, 500);

    index++;
  }, 1000);
}

function highlightKey(key) {
  if (numberButtons[key]) {
    numberButtons[key].style.backgroundColor = "yellow";
  } else if (letterButtons[key]) {
    letterButtons[key].style.backgroundColor = "yellow";
  }
}

function unhighlightKey(key) {
  if (numberButtons[key]) {
    numberButtons[key].style.backgroundColor = "";
  } else if (letterButtons[key]) {
    letterButtons[key].style.backgroundColor = "";
  }
}

function handleInput(input) {
  if (!sequence.length || !inputEnabled) return;

  playerInput.push(input);
  sequenceDisplay.textContent = playerInput;

  if (
    playerInput[playerInput.length - 1] !== sequence[playerInput.length - 1]
  ) {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      showPopup('Wrong input! Try again.');
      playerInput = [];
      return;
    }
    showPopup('Wrong input! Game over.');
    resetGame();
    return;
  }

  if (playerInput.length === sequence.length) {
    inputEnabled = false;
    repeatSequence.textContent = "next";
    repeatSequence.disabled = false;
    lockLetters();
    lockNumbers();
    startRound();
  }
  highlightKey(input);
  setTimeout(() => unhighlightKey(input), 200);
}

function repeat() {
  if (!canRepeat) return;
  canRepeat = false;
  displaySequence();
  repeatSequence.disabled = true;
  sequenceDisplay.textContent = '';
  playerInput = [];
}

function resetGame() {
  sequence = [];
  playerInput = [];
  round = 0;
  attemptsLeft = 2;
  inputEnabled = false;
  lockLetters();
  lockNumbers();
  updateRoundDisplay();
  repeatSequence.textContent = "repeat sequence";
  sequenceDisplay.textContent = "";
  rounds.textContent = 'Round: 0/5';
  repeatSequence.disabled = true;
  newGameButton.disabled = true;
  startButton.classList.remove('none');
  unlockLevel(currentLevel);
  roundDisplay.textContent = `Round: ${round}/5`;
  Object.keys(keyButtons).forEach(key => {
    unhighlightKey(key);
  });
  popupContainer.style.display = 'none';
}