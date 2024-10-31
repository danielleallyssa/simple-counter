"use strict";

class CreateCounter {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _init() {
    this._setEventListeners();
  }

  _getElements() {
    return {
      countNum: 0,
      numUp: document.querySelector(".up"),
      numDown: document.querySelector(".down"),
      numReset: document.querySelector(".reset"),
      counter: document.querySelector(".number-container span"),
    };
  }

  _setEventListeners() {
    this.elements.numUp.addEventListener("click", () => this.increaseNum());
    this.elements.numDown.addEventListener("click", () => this.decreaseNum());
    this.elements.numReset.addEventListener("click", () => this.resetNum());

    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp" || e.code === "ArrowRight") {
        this.increaseNum();
      } else if (e.code === "ArrowDown" || e.code === "ArrowLeft") {
        this.decreaseNum();
      } else if (e.code === "Space") {
        this.resetNum();
      }
    });
  }

  changeCounter() {
    this.elements.counter.textContent = this.elements.countNum;
    this.elements.counter.style.color =
      this.elements.countNum < 0
        ? "red"
        : this.elements.countNum > 0
        ? "green"
        : "inherit";
  }

  increaseNum() {
    this.elements.countNum += 1;
    this.changeCounter();
  }

  decreaseNum() {
    this.elements.countNum -= 1;
    this.changeCounter();
  }

  resetNum() {
    this.elements.countNum = 0;
    this.changeCounter();
  }
}

new CreateCounter();
