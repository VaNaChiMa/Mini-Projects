// Console

let size = 8;
let board = "";

for (let x = 0; x < size; x++) {
   for (let y = 0; y < size; y++) {
     if ((x + y) % 2 == 0) {
       board += " ";
     } else {
       board += "#";
     }
   }
   board += "\n";
}

console.log(board);

// HTML + CSS + JS

const squareNames = document.querySelectorAll('.a');

      squareNames.forEach(square => {
        square.addEventListener('mouseover', () => {
          removeActiveClasses()
          square.classList.add('active')
          console.log(square.innerHTML)
        })
      })

      squareNames.forEach(square => {
        square.addEventListener('mouseout', () => {
          square.classList.remove('active')
        })
      })

function removeActiveClasses() {
  squareNames.forEach(square => {
    square.classList.remove('active')
  })
}

/*   What i learned?
+ double margins
+ for
+ forEach
+ addEventListener 
+ console.log()
*/



