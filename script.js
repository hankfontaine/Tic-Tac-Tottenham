let mainContainer = document.getElementById("container");

for (i = 1; i <= 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cellStyle");
  cell.innerHTML = "X";
  console.log("test");
  mainContainer.appendChild(cell);
}
