const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const clearGame = document.getElementById('clear');
const winningPlayer = document.getElementById('whoWon');

const grid = () => Array.from(document.getElementsByClassName('square-space'));
const boxNumId = (squareEl) => Number.parseInt(squareEl.id.replace('box', ''));
const emptySquares = () => grid().filter(squareEl => squareEl.innerText === '');
const allSame = (arr) => arr.every(squareEl => squareEl.innerText === arr[0].innerText && squareEl.innerText !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => boxNumId(emptySquares()[Math.floor(Math.random() * emptySquares().length)]);

const endGame = (winningSequence) => { 
    winningSequence.forEach(squareEl => squareEl.classList.add('winner'));
    disableListeners();
    winningPlayer.innerHTML = "";
};
const checkForVictory = () => {
    let victory = false;

    winningCombos.forEach(combo => {
        const _grid = grid();
        const sequence = [_grid[combo[0]], _grid[combo[1]], _grid[combo[2]]];
        if(allSame(sequence)) {
            victory = true;
            endGame(sequence);
        }
    });

    return victory;
}

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o');
        if(!checkForVictory());
        enableListeners();
    }, 1500);
}

const clickFunct = (event) => {
    takeTurn(boxNumId(event.target), 'x');
    if(!checkForVictory())
    opponentTurn();
};

const enableListeners = () => grid().forEach(squareEl => squareEl.addEventListener('click', clickFunct));
const disableListeners = () => grid().forEach(squareEl => squareEl.removeEventListener('click', clickFunct));

enableListeners();

const newGame = () => {
   enableListeners();

}

clearGame.addEventListener('click', function() {
    newGame();
});