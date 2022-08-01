const myBtn = document.querySelector("#myBtn");
const myHeading = document.querySelector("h1");
const squaresContainer = document.querySelector(".squarsContainer");
const square = document.querySelectorAll(".square");

let count = 0;
let squaresCount = [];
let colors = [];

myBtn.addEventListener("click", function () {
  createNewColor();

  createSquare();

  for (let i = 0; i < squaresCount.length; i++) {
    for (let a = 0; a < colors.length; a++) {
      squaresCount[a].style.backgroundColor = colors[a];
    }
  }
});

function createSquare() {
  const squareColor = document.createElement("div");
  const squareColorNum = document.createElement("p");

  squaresContainer.appendChild(squareColor);
  squareColor.appendChild(squareColorNum);
  squareColor.className = "square";

  count += 1;
  squareColorNum.innerHTML = count;

  squaresCount.push(squareColor);

  squaresCount.forEach((square) => {
    square.addEventListener("click", function () {
      document.body.style.backgroundColor = this.style.backgroundColor;
      myHeading.innerText = `Color: ${this.style.backgroundColor}`;
    });
  });
}

function createNewColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = newColor;
  myHeading.innerText = `Color: ${newColor}`;

  colors.push(newColor);

  return newColor;
}
