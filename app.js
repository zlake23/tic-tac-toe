const token_p1 = document.getElementById("playerOneToken");
const token_p2 = document.getElementById("playerTwoToken");
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

function markSquare(X, O) {

}

function resetGame() {
    playerOne.innerHTML = "";
    playerTwo.innerHTML = "";
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
    clearGame.addEventListener('click', function() {
        resetGame();
    })
}

playGame();