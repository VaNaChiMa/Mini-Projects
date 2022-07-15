const clock = document.querySelector(".clock");
const chisinau = document.querySelector("#chisinau");
const newYork = document.querySelector("#new-york");
chisinau.addEventListener("click", function () {});

newYork.addEventListener("click", function () {
  startTime();
});

function startTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = checkNumber(h);
  m = checkNumber(m);
  s = checkNumber(s);

  document.querySelector(".clock").innerHTML = `${h}:${m}:${s}`;

  setTimeout(startTime, 1000);
}

// add zero in front of numbers < 10
function checkNumber(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    removeActiveClasses();
    if (button.className === "") {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

function removeActiveClasses() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
