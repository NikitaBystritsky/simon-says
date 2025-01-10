const body = document.body;

//game container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
body.appendChild(mainContainer);

//level container
const levelContainer = document.createElement('div');
levelContainer.classList.add('level-container');
mainContainer.appendChild(levelContainer);

//level buttons
const levels = ['easy', 'medium', 'hard'];
levels.forEach(level => {
    const button = document.createElement('button');
    button.textContent = level;
    button.onclick = () => startGame(level);
  levelContainer.appendChild(button);
});

//new game button
const newGameButton = document.createElement('button');
newGameButton.classList.add('new-game-btn');
newGameButton.textContent = 'new game';
mainContainer.appendChild(newGameButton);