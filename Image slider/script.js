var pics = [
  "https://picsum.photos/id/128/700/500",
  "https://picsum.photos/id/1057/700/500",
  "https://picsum.photos/id/1043/700/500",
  "https://picsum.photos/id/1050/700/500",
  "https://picsum.photos/id/1020/700/500",
  "https://picsum.photos/id/651/700/500",
  "https://picsum.photos/id/634/700/500",
  "https://picsum.photos/id/599/700/500",
  "https://picsum.photos/id/575/700/500",
  "https://picsum.photos/id/574/700/500",
  "https://picsum.photos/id/568/700/500",
  "https://picsum.photos/id/566/700/500",
  "https://picsum.photos/id/558/700/500",
  "https://picsum.photos/id/507/700/500",
  "https://picsum.photos/id/501/700/500",
  "https://picsum.photos/id/353/700/500",
  "https://picsum.photos/id/323/700/500",
  "https://picsum.photos/id/287/700/500",
  "https://picsum.photos/id/730/700/500",
  "https://picsum.photos/id/779/700/500",
];

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var img = document.querySelector("img");
var counter = 0;

next.addEventListener("click", function () {
  counter = counter + 1;

  if (counter > pics.length - 1) {
    counter = 0;
  }

  img.src = pics[counter];
  console.log(counter);
});

prev.addEventListener("click", function () {
  counter = counter - 1;

  if (counter < 0) {
    counter = pics.length - 1;
  }

  img.src = pics[counter];
  console.log(counter);
});
