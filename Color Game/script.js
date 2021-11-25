
const myBtn = document.querySelector('#myBtn');
const myHeading = document.querySelector('h1');
const container = document.querySelector('.container');
// const squares = document.querySelectorAll('.square');
let count = 0;
let squaresCount = [];
let colors = [];


myBtn.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    myHeading.innerText = newColor;

    function returnColor() {
        return newColor;
    }
    
    colors.push(returnColor());
    console.log(colors);

    createSquare();

    for (let i = 0; i < squaresCount.length; i++) {
        for (let a = 0; a < colors.length; a++) {
            squaresCount[a].style.backgroundColor = colors[a];
        }
    }

    if(r + g + b <= 150) {
        myHeading.style.color = "#fff"
     } else {
         myHeading.style.color = "#000"
     }

});

function createSquare() {
    const squareColor = document.createElement("div");
    squareColor.innerHTML = "COLOR";
    container.appendChild(squareColor);
    squareColor.className = "square";
    // squareColor.style.backgroundColor = '#fff';
    
    count+=1;
    squareColor.innerHTML = count;

    squaresCount.push(squareColor);
    console.log(squaresCount);

    squaresCount.forEach(square => {
        square.addEventListener('click', function() {
         document.body.style.backgroundColor = this.style.backgroundColor;
         myHeading.innerText = this.style.backgroundColor;
        })
    })
}




