//////////////// GAME BOARD DESIGN //////////////////////
let mainContainer = document.getElementById("container");
for (i = 1; i <= 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cellStyle");
  //   cell.innerHTML = "X";
  cell.id = "cell" + i;
  mainContainer.appendChild(cell);
}

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

gameBoard.addO(cell1);
gameBoard.addO(cell2);
gameBoard.addX(cell3);
gameBoard.addO(cell4);
gameBoard.addO(cell5);
gameBoard.addX(cell6);
gameBoard.addO(cell7);
gameBoard.addX(cell8);
gameBoard.addX(cell9);
