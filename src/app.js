/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whor = Math.floor(Math.random() * who.length);
  let actionr = Math.floor(Math.random() * action.length);
  let whatr = Math.floor(Math.random() * what.length);
  let whenr = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[whor] + " " + action[actionr] + " " + what[whatr] + " " + when[whenr];
};
