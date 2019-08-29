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

const grid = () => Array.from(document.getElementsByClassName('square-space'));
const boxNumId = (squareEl) => Number.parseInt(squareEl.id.replace('q', ''));
const emptySquares = () => grid().filter(squareEl => squareEl.innerText === '');
const allSame = (arr) => arr.every(squareEl => squareEl.innerText === arr[0].innerText && squareEl.innerText !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => 0;

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o');
        enableListeners();
    }, 1500);
}

const clickFunct = (event) => {
    takeTurn(boxNumId(event.target), 'x');
    opponentTurn();
};

const enableListeners = () => grid().forEach(squareEl => squareEl.addEventListener('click', clickFunct));
const disableListeners = () => grid().forEach(squareEl => squareEl.removeEventListener('click', clickFunct));

enableListeners();