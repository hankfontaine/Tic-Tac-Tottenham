//////////////// GAME BOARD DESIGN //////////////////////

// const delayOfDisplay = 2000;

// setTimeout(() => {
//   const header = document.getElementById("header");
//   const xButton = document.createElement("button");
//   xButton.onclick = function () {
//     playerOne.playerSymbol = "X";
//   };
//   xButton.classList.add("TopButtonStyle");
//   xButton.innerHTML = "Play as X";
//   header.appendChild(xButton);

//   const oButton = document.createElement("button");
//   oButton.onclick = function () {
//     playerOne.playerSymbol = "O";
//   };
//   oButton.classList.add("TopButtonStyle");
//   oButton.innerHTML = "Play as 0";
//   header.appendChild(oButton);
// }, delayOfDisplay);

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
const playerOne = playerFactory(
  // "Player One",
  prompt("What's player one's name?"),
  "Human",
  "first",
  // prompt("What's player one's symbol?")
  "X"
);
const playerTwo = playerFactory(
  // "Player Two",
  prompt("What's player two's name?"),
  "Computer",
  "second",
  //   prompt("What's player two's symbol?")
  "O"
);

const gameBoard = (() => {
  let stateOfBoard = ["", "", "", "", "", "", "", "", ""];
  let playerTurn = "first";
  let gameButtons = document.querySelectorAll(".cellStyle");
  gameButtons.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (
        cell.innerHTML !== playerOne.playerSymbol &&
        cell.innerHTML !== playerTwo.playerSymbol &&
        playerTurn === "first"
      ) {
        gameBoard.stateOfBoard[cell.id] = playerOne.playerSymbol;
        playerTurn = "second";
      } else if (
        cell.innerHTML !== playerOne.playerSymbol &&
        cell.innerHTML !== playerTwo.playerSymbol &&
        playerTurn === "second"
      ) {
        gameBoard.stateOfBoard[cell.id] = playerTwo.playerSymbol;
        playerTurn = "first";
      }
      gameBoard.stateOfBoard.forEach((element, index) => {
        let cellsUpdated = document.querySelectorAll(".cellStyle");
        cellsUpdated[index].innerHTML = element;
      });
      checkForWinner();
      createResetButton();
    });
  });
  return { stateOfBoard };
})();

const checkForWinner = () => {
  let result;
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
    console.log(result);
    alert(result);
    return result;
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
    alert(result);
    return result;
  }
  if (!result && !gameBoard.stateOfBoard.includes("")) {
    result = `${playerOne.name} and ${playerTwo.name} tied!`;
    alert(result);
    return result;
  }
};

const createResetButton = () => {
  const bottom = document.getElementById("bottom");
  bottom.innerHTML = "";
  const resetButton = document.createElement("button");
  resetButton.onclick = function () {
    clearBoard();
    gameBoard.stateOfBoard = ["", "", "", "", "", "", "", "", ""];
  };
  resetButton.classList.add("ButtonStyle");
  resetButton.innerHTML = "Reset The Board";
  bottom.appendChild(resetButton);
};
