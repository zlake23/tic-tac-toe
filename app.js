let playerOne = document.getElementById("p1");
let playerTwo = document.getElementById("p2");
const startGame = document.getElementById("start");
const clearGame = document.getElementById("clear");
let winnerUpdate = document.getElementById("winner");
const squareOne = document.getElementById("box1");
const squareTwo = document.getElementById("box2");
const squareThree = document.getElementById("box3");
const squareFour = document.getElementById("box4");
const squareFive = document.getElementById("box5");
const squareSix = document.getElementById("box6");
const squareSeven = document.getElementById("box7");
const squareEight = document.getElementById("box8");
const squareNine = document.getElementById("box9");


function markSquare() {
    console.log("you clicked a box");
}

function newGame() {
    playerOne.innerHTML = "Player 1: Your Turn!";
}

function resetGame() {
    playerOne.innerHTML = "Player 1:";
    playerTwo.innerHTML = "Player 2:";
    squareOne.innerHTML = "";
    squareTwo.innerHTML = "";
    squareThree.innerHTML = "";
    squareFour.innerHTML = "";
    squareFive.innerHTML = "";
    squareSix.innerHTML = "";
    squareSeven.innerHTML = "";
    squareEight.innerHTML = "";
    squareNine.innerHTML = "";
    winnerUpdate.innerHTML = "";
}

function playGame() {
    squareOne.addEventListener('click', function() {
        markSquare();
    });
    squareTwo.addEventListener('click', function() {
        markSquare();
    });
    squareThree.addEventListener('click', function() {
        markSquare();
    });
    squareFour.addEventListener('click', function() {
        markSquare();
    });
    squareFive.addEventListener('click', function() {
        markSquare();
    });
    squareSix.addEventListener('click', function() {
        markSquare();
    });
    squareSeven.addEventListener('click', function() {
        markSquare();
    });
    squareEight.addEventListener('click', function() {
        markSquare();
    });
    squareNine.addEventListener('click', function() {
        markSquare();
    });
    startGame.addEventListener('click', function() {
        newGame();
    });
    clearGame.addEventListener('click', function() {
        resetGame();
    })
}

playGame();