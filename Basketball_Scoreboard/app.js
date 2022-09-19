const plusOneHome = document.querySelector(".plusOneHome");
const plusOneGuest = document.querySelector(".plusOneGuest");

const plusTwoHome = document.querySelector(".plusTwoHome");
const plusTwoGuest = document.querySelector(".plusTwoGuest");

const plusThreeHome = document.querySelector(".plusThreeHome");
const plusThreeGuest = document.querySelector(".plusThreeGuest");

const new_game = document.querySelector(".new_game .btn");

let home_display = document.querySelector(".home_display span");
let guest_display = document.querySelector(".guest_display span");

var home_count = 0;
var guest_count = 0;

new_game.addEventListener("click", function () {
  home_count = 0;
  home_display.innerHTML = home_count;

  guest_count = 0;
  guest_display.innerHTML = guest_count;

  home_display.parentElement.classList.remove("leader");
  guest_display.parentElement.classList.remove("leader");
});

if (home_count > guest_count) {
  home_display.parentElement.classList.add("leader");
} else if (guest_count > home_count) {
  guest_display.parentElement.classList.add("leader");
}

const leftBtns = document.querySelectorAll(".leftBtn");
const rightBtns = document.querySelectorAll(".rightBtn");

leftBtns.forEach(function (leftBtn) {
  leftBtn.addEventListener("click", function (e) {
    let btn_value = e.target.dataset.value;
    home_count += +btn_value;
    home_display.innerHTML = home_count;
    console.log(btn_value);
    highlightLeader();
  });
});

rightBtns.forEach(function (rightBtn) {
  rightBtn.addEventListener("click", function (e) {
    let btn_value = e.target.dataset.value;
    guest_count += +btn_value;
    guest_display.innerHTML = guest_count;
    console.log(btn_value);
    highlightLeader();
  });
});

function highlightLeader() {
  if (home_count > guest_count) {
    home_display.parentElement.classList.add("leader");
    guest_display.parentElement.classList.remove("leader");
  } else if (guest_count > home_count) {
    home_display.parentElement.classList.remove("leader");
    guest_display.parentElement.classList.add("leader");
  } else {
    home_display.parentElement.classList.remove("leader");
    guest_display.parentElement.classList.remove("leader");
  }
}

// console.log(+btns.dataset.value + 2);
