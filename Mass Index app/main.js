"use strict";
alert("Welcome to mass & weight Index Calculator!");
let isRunning = true;

while (isRunning) {
  const chooseMenu = "a) Start b) Quit";
  const userChoice = prompt(chooseMenu);
  const lowerUserChoice = userChoice.toLowerCase();
  switch (lowerUserChoice) {
    case "a":
      const userHeight = prompt("What is your height? (in meters)");
      const userWeight = prompt("What is your weight?(in kilos)");

      const formula = userWeight / userHeight ** 2;
      alert(formula.toString().slice(0, 4));
      break;

    case "b":
      isRunning = false;
      break;

    default:
      break;
  }
}
