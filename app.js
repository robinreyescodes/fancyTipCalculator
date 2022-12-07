"use strict";

const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const customTip = document.querySelector(".custom");
const tipBtns = document.querySelector(".tip-btns");
const buttons = document.querySelectorAll(".btn");
const aBtn = document.querySelector(".btn");
const resetBtn = document.querySelector(".reset-btn");
let tipPerPerson = 0;
let tipTotal = 0;
let billValue = 0;
let peopleValue = 0;

//gets the user input bill value
billInput.addEventListener("keyup", (e) => {
  // e.target.value gets the input value
  //set variable to have target value
  billValue = Number(e.target.value);
});

//gives clickability and function for each of the tip buttons

//USED EVENT DELEGATION/BUBBLING TO MAKE THIS BLOCK OF CODE SO MUCH CLEANER AND SIMPLER!
tipBtns.addEventListener("click", (e) => {
  //bubbling occurs here...
  if (e.target.classList.contains("btn")) {
    //if tip and total amounts are > 0 and a new tip is selected
    if (tipTotal > 0 && billValue > 0) {
      tipTotal = billValue * Number(e.target.value.slice(0, -1) / 100);

      tipAmount.textContent = `$${(tipTotal / peopleValue).toFixed(2)}`;
      //change UI of total amount per person
      totalAmount.textContent = `$${(
        (billValue + tipTotal) /
        peopleValue
      ).toFixed(2)}`;
    }
    //gets rid of active class for each btn
    buttons.forEach((btn) => btn.classList.remove("btn-active"));
    //style changes when btn clicked
    e.target.classList.toggle("btn-active");
    //get rid of style on any btns that have it
    //store tip percent in variable
    tipTotal = billValue * Number(e.target.value.slice(0, -1) / 100);
  }
  //if user inputs custom tip percentage
  if (e.target.classList.contains("custom")) {
    customTip.addEventListener("keyup", (e) => {
      tipTotal = (billValue * Number(e.target.value)) / 100;

      tipAmount.textContent = `$${(tipTotal / peopleValue).toFixed(2)}`;
      //change UI of total amount per person
      totalAmount.textContent = `$${(
        (billValue + tipTotal) /
        peopleValue
      ).toFixed(2)}`;
    });
  }
});

//gets how many ways the bill needs to be split in
peopleInput.addEventListener("keyup", (e) => {
  //solves the infinity/NaN bug
  //if backspace is being pressed and input is empty...
  if (e.key === "Backspace" && e.target.value == "") {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  } else {
    //stores user input for people in variable
    peopleValue = Number(e.target.value);
    //calculate tip per person
    tipPerPerson = tipTotal / peopleValue;
    //change UI of tip amount per person
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    //change UI of total amount per person
    totalAmount.textContent = `$${(
      (billValue + tipTotal) /
      peopleValue
    ).toFixed(2)}`;
  }
});

//resets all the values
resetBtn.addEventListener("click", () => {
  buttons.forEach((btn) => btn.classList.remove("btn-active"));
  billInput.value = "";
  peopleInput.value = "";
  tipPerPerson = 0;
  tipTotal = 0;
  billValue = 0;
  peopleValue = 0;
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});
