//////////////// GAME BOARD DESIGN //////////////////////
const mainContainer = document.getElementById("container");
for (i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cellStyle");
  cell.id = i;
  mainContainer.appendChild(cell);
}
const gameSpaceOne = document.getElementById("0");
const gameSpaceTwo = document.getElementById("1");
const gameSpaceThree = document.getElementById("2");
const gameSpaceFour = document.getElementById("3");
const gameSpaceFive = document.getElementById("4");
const gameSpaceSix = document.getElementById("5");
const gameSpaceSeven = document.getElementById("6");
const gameSpaceEight = document.getElementById("7");
const gameSpaceNine = document.getElementById("8");

const clearBoard = () => {
  gameSpaceOne.innerHTML = "T";
  gameSpaceTwo.innerHTML = "Ø";
  gameSpaceThree.innerHTML = "T";
  gameSpaceFour.innerHTML = "T";
  gameSpaceFive.innerHTML = "E";
  gameSpaceSix.innerHTML = "N";
  gameSpaceSeven.innerHTML = "H";
  gameSpaceEight.innerHTML = "A";
  gameSpaceNine.innerHTML = "M";
};

clearBoard();
////////////////// GAME LOGIC ///////////////////////////
const playerFactory = (name, isHuman, playerTurn, playerSymbol) => {
  return { name, isHuman, playerTurn, playerSymbol };
};
const playerOne = playerFactory("Hank", "Human", "first", "X");
const playerTwo = playerFactory("HAL", "Computer", "second", "O");

const gamePlay = (() => {
  let playerTurn = "first";
  return { playerTurn };
})();

const gameBoard = (() => {
  const stateOfBoard = ["", "", "", "", "", "", "", "", ""];
  let gameButtons = document.querySelectorAll(".cellStyle");
  gameButtons.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (
        cell.innerHTML != "X" &&
        cell.innerHTML != "O" &&
        gamePlay.playerTurn === "first"
      ) {
        gameBoard.stateOfBoard[cell.id] = playerOne.playerSymbol;
      }
      if (
        cell.innerHTML != "X" &&
        cell.innerHTML != "O" &&
        gamePlay.playerTurn === "second"
      ) {
        gameBoard.stateOfBoard[cell.id] = playerTwo.playerSymbol;
      }
      gameBoard.stateOfBoard.forEach((element, index) => {
        let cellsUpdated = document.querySelectorAll(".cellStyle");
        cellsUpdated[index].innerHTML = element;
      });
      if (gamePlay.playerTurn === "first") {
        gamePlay.playerTurn = "second";
      } else gamePlay.playerTurn = "first";
      checkForWinner();
    });
  });
  return { stateOfBoard };
})();

function checkForWinner() {
  let result;
  if (gameBoard.stateOfBoard.includes("")) {
    if (
      (gameSpaceOne.innerHTML === playerOne.playerSymbol &&
        gameSpaceTwo.innerHTML === playerOne.playerSymbol &&
        gameSpaceThree.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceFour.innerHTML === playerOne.playerSymbol &&
        gameSpaceFive.innerHTML === playerOne.playerSymbol &&
        gameSpaceSix.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceSeven.innerHTML === playerOne.playerSymbol &&
        gameSpaceEight.innerHTML === playerOne.playerSymbol &&
        gameSpaceNine.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceOne.innerHTML === playerOne.playerSymbol &&
        gameSpaceFour.innerHTML === playerOne.playerSymbol &&
        gameSpaceSeven.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceTwo.innerHTML === playerOne.playerSymbol &&
        gameSpaceFive.innerHTML === playerOne.playerSymbol &&
        gameSpaceEight.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceThree.innerHTML === playerOne.playerSymbol &&
        gameSpaceSix.innerHTML === playerOne.playerSymbol &&
        gameSpaceNine.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceOne.innerHTML === playerOne.playerSymbol &&
        gameSpaceFive.innerHTML === playerOne.playerSymbol &&
        gameSpaceNine.innerHTML === playerOne.playerSymbol) ||
      (gameSpaceThree.innerHTML === playerOne.playerSymbol &&
        gameSpaceFive.innerHTML === playerOne.playerSymbol &&
        gameSpaceSeven.innerHTML === playerOne.playerSymbol)
    ) {
      result = `${playerOne.name} wins!`;
    } else if (
      (gameSpaceOne.innerHTML === playerTwo.playerSymbol &&
        gameSpaceTwo.innerHTML === playerTwo.playerSymbol &&
        gameSpaceThree.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceFour.innerHTML === playerTwo.playerSymbol &&
        gameSpaceFive.innerHTML === playerTwo.playerSymbol &&
        gameSpaceSix.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceSeven.innerHTML === playerTwo.playerSymbol &&
        gameSpaceEight.innerHTML === playerTwo.playerSymbol &&
        gameSpaceNine.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceOne.innerHTML === playerTwo.playerSymbol &&
        gameSpaceFour.innerHTML === playerTwo.playerSymbol &&
        gameSpaceSeven.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceTwo.innerHTML === playerTwo.playerSymbol &&
        gameSpaceFive.innerHTML === playerTwo.playerSymbol &&
        gameSpaceEight.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceThree.innerHTML === playerTwo.playerSymbol &&
        gameSpaceSix.innerHTML === playerTwo.playerSymbol &&
        gameSpaceNine.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceOne.innerHTML === playerTwo.playerSymbol &&
        gameSpaceFive.innerHTML === playerTwo.playerSymbol &&
        gameSpaceNine.innerHTML === playerTwo.playerSymbol) ||
      (gameSpaceThree.innerHTML === playerTwo.playerSymbol &&
        gameSpaceFive.innerHTML === playerTwo.playerSymbol &&
        gameSpaceSeven.innerHTML === playerTwo.playerSymbol)
    ) {
      result = `${playerTwo.name} wins!`;
    }
  } else result = `${playerOne.name} and ${playerTwo.name} tied!`;
  console.log(result);
  return result;
}
