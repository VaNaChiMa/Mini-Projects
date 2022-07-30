const buttons = document.querySelectorAll("button");
const clocks = document.querySelectorAll(".clock");
const chisinau = document.getElementById("chisinau");
const newYork = document.getElementById("new-york");
const tokyo = document.getElementById("tokyo");
const capeTown = document.getElementById("cape-town");
const buenosAires = document.getElementById("buenos-aires");

const timeZones = [
  "Europe/Chisinau",
  "America/New_York",
  "Asia/Tokyo",
  "Africa/Cairo",
  "America/Argentina/Buenos_Aires",
];

for (let i = 0; i < clocks.length; i++) {
  setInterval(function tick() {
    let time = new Date();
    time = time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: timeZones[i],
    });
    clocks[i].innerText = time;
    // console.log(time);
  }, 1000);
}

function addActiveClasses() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      removeActiveClasses();
      if (button.className === "") {
        button.classList.add("active");
        if (this.textContent === "New-York") {
          removeShowClasses();
          newYork.classList.add("show");
        } else if (this.textContent === "Tokyo") {
          removeShowClasses();
          tokyo.classList.add("show");
        } else if (this.textContent === "Cape Town") {
          removeShowClasses();
          capeTown.classList.add("show");
        } else if (this.textContent === "Buenos Aires") {
          removeShowClasses();
          buenosAires.classList.add("show");
        } else {
          removeShowClasses();
          chisinau.classList.add("show");
        }
      } else {
        button.classList.remove("active");
      }
      // console.log(this.textContent);
    });
  });
}

function removeActiveClasses() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
function removeShowClasses() {
  clocks.forEach((clock) => {
    clock.classList.remove("show");
  });
}

addActiveClasses();
