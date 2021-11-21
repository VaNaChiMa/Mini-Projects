
const myBtn = document.querySelector('#myBtn');
const myHeading = document.querySelector('h1');
const container = document.querySelector('.container');
const squares = document.querySelector('.square');
let count = 0;
let colors = [];
console.log(typeof squares);
console.log(squares);

myBtn.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    myHeading.innerText = newColor;
    
    // myBtn.style.color = newColor;
    if(r + g + b <= 150) {
        myHeading.style.color = "#fff"
     } else {
         myHeading.style.color = "#000"
     }

        

    // squares.forEach(function(
    //     for (var i = 0; i < colors.length; i++) {
    //         squares.style.backgroundColor[i];
    //     }
    // ))

     createSquare();



});



function createSquare() {
    const squareColor = document.createElement("div");
    squareColor.innerHTML = "COLOR";
    container.appendChild(squareColor);
    squareColor.className = "square";
    squareColor.style.backgroundColor = '#fff';
    count+=1;
    squareColor.innerHTML = count;
    // colors.push(newColor);
    //     console.log(colors);

}



