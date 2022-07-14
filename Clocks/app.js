function startTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = checkNumber(h);
  m = checkNumber(m);
  s = checkNumber(s);

  document.querySelector(".clock").innerHTML = h + " : " + m + " : " + s;
  // document.querySelector(".clockNewYork").innerHTML =
  //   h - 7 + " : " + m + " : " + s;
  // document.querySelector(".clockTokyo").innerHTML =
  //   h + 6 + " : " + m + " : " + s;
  // document.querySelector(".clockBuenosAires").innerHTML =
  //   h - 6 + " : " + m + " : " + s;
  // document.querySelector(".clockCapeTown").innerHTML =
  //   h + 1 + " : " + m + " : " + s;

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

const images = [];
