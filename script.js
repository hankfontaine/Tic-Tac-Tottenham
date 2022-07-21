//////////////// GAME BOARD DESIGN //////////////////////
let mainContainer = document.getElementById("container");
for (i = 1; i <= 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cellStyle");
  cell.id = "cell" + i;
  mainContainer.appendChild(cell);
}

let gameSpaceOne = document.getElementById("cell1");
let gameSpaceTwo = document.getElementById("cell2");
let gameSpaceThree = document.getElementById("cell3");
let gameSpaceFour = document.getElementById("cell4");
let gameSpaceFive = document.getElementById("cell5");
let gameSpaceSix = document.getElementById("cell6");
let gameSpaceSeven = document.getElementById("cell7");
let gameSpaceEight = document.getElementById("cell8");
let gameSpaceNine = document.getElementById("cell9");

gameSpaceOne.innerHTML = "T";
gameSpaceTwo.innerHTML = "I";
gameSpaceThree.innerHTML = "C";
gameSpaceFour.innerHTML = "T";
gameSpaceFive.innerHTML = "A";
gameSpaceSix.innerHTML = "C";
gameSpaceSeven.innerHTML = "T";
gameSpaceEight.innerHTML = "Ø";
gameSpaceNine.innerHTML = "E";

////////////////// GAME LOGIC ///////////////////////////
const gameBoard = (() => {
  const addX = (selectedCell) => (selectedCell.innerHTML = "X");
  const addO = (selectedCell) => (selectedCell.innerHTML = "O");
  const checkForWinner = () => declareWinner();
  return {
    addX,
    addO,
    checkForWinner,
  };
})();

// gameBoard.addO(gameSpaceOne);
// gameBoard.addO(gameSpaceTwo);
// gameBoard.addX(gameSpaceThree);
// gameBoard.addO(gameSpaceFour);
// gameBoard.addO(gameSpaceFive);
// gameBoard.addX(gameSpaceSix);
// gameBoard.addO(gameSpaceSeven);
// gameBoard.addX(gameSpaceEight);
// gameBoard.addX(gameSpaceNine);
