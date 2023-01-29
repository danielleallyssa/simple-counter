"use strict";

let countNum = 0;

// Input elements
const numUp = document.querySelector(".up");
const numDown = document.querySelector(".down");
const numReset = document.querySelector(".reset");

// Output elements
const counterTag = document.querySelector(".number-container span");

// Functions
const showNum = () => {
  counterTag.innerHTML = countNum;

  if (countNum < 0) {
    counterTag.style.color = "red";
  } else if (countNum > 0) {
    counterTag.style.color = "green";
  } else {
    counterTag.style.color = "inherit";
  }
};

const increaseNum = () => {
  countNum += 1;
  showNum();
};
const decreaseNum = () => {
  countNum -= 1;
  showNum();
};
const resetNum = () => {
  countNum = 0;
  showNum();
};

//Click events
numUp.addEventListener("click", function () {
  increaseNum();
});
numDown.addEventListener("click", function () {
  decreaseNum();
});
numReset.addEventListener("click", function () {
  resetNum();
});

//Keyboard events
document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp" || e.code === "ArrowRight") {
    increaseNum();
  } else if (e.code === "ArrowDown" || e.code === "ArrowLeft") {
    decreaseNum();
  } else if (e.code === "Space") {
    resetNum();
  }
});
