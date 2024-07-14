/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["My Dog ", "My Uncle Joe ", "The Gods ", "Some Stranger "];
let action = ["ate ", "blew up ", "crushed ", "broke "];
let what = ["my homework ", "my phone ", "the car "];
let when = [
  "before the class ",
  "when I was sleeping ",
  "while I was exercising ",
  "during my lunch ",
  "while I was praying "
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray) {
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello from the console!");
  document.body.innerHTML =
    getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when);
};
