//////////////// GAME BOARD DESIGN //////////////////////
const mainContainer = document.getElementById("container");
for (i = 1; i <= 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cellStyle");
  cell.id = "cell" + i;
  mainContainer.appendChild(cell);
}
const gameSpaceOne = document.getElementById("cell1");
const gameSpaceTwo = document.getElementById("cell2");
const gameSpaceThree = document.getElementById("cell3");
const gameSpaceFour = document.getElementById("cell4");
const gameSpaceFive = document.getElementById("cell5");
const gameSpaceSix = document.getElementById("cell6");
const gameSpaceSeven = document.getElementById("cell7");
const gameSpaceEight = document.getElementById("cell8");
const gameSpaceNine = document.getElementById("cell9");

const clearBoard = () => {
  gameSpaceOne.innerHTML = "";
  gameSpaceTwo.innerHTML = "";
  gameSpaceThree.innerHTML = "";
  gameSpaceFour.innerHTML = "";
  gameSpaceFive.innerHTML = "";
  gameSpaceSix.innerHTML = "";
  gameSpaceSeven.innerHTML = "";
  gameSpaceEight.innerHTML = "";
  gameSpaceNine.innerHTML = "";
};

////////////////// GAME LOGIC ///////////////////////////
clearBoard();

const playerFactory = (name, isHuman, playerSymbol) => {
  return { name, isHuman, playerSymbol };
};
const playerOne = playerFactory("Hank", "Human", "X");
const playerTwo = playerFactory("HAL", "Computer", "O");

const gameBoard = (() => {
  const stateOfBoard = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  return { stateOfBoard };
})();

function drawBoard(input) {
  input.forEach((element, index) => {
    let cellsUpdated = document.querySelectorAll(".cellStyle");
    cellsUpdated[index].innerHTML = element;
  });
}
drawBoard(gameBoard.stateOfBoard);

const gameFlow = ((
  preTurnBoardDisplay,
  playerTurn,
  updatedBoardDisplay,
  winnerCheck
) => {
  return { preTurnBoardDisplay, playerTurn, updatedBoardDisplay, winnerCheck };
})();
