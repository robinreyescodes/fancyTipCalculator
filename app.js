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
let totalValue = 0;

//gets the user input bill value
billInput.addEventListener("keyup", (e) => {
  // e.target.value gets the input value
  //set variable to have target value
  billValue = Number(e.target.value);
});

//gives clickability and function for each of the tip buttons

//USED EVENT DELEGATION/BUBBLING TO MAKE THIS BLOCK OF CODE SO MUCH CLEANER AND SIMPLER!
tipBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
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
    });
  }
});

//gets how many ways the bill needs to be split in
peopleInput.addEventListener("keyup", (e) => {
  if (e.target.value == "") {
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
  }
  //stores user input for people in variable
  peopleValue = Number(e.target.value);
  //calculate tip per person
  tipPerPerson = tipTotal / peopleValue;
  //change UI of tip amount per person
  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  //change UI of total amount per person
  totalAmount.textContent = `$${((billValue + tipTotal) / peopleValue).toFixed(
    2
  )}`;
});

//resets all the values
resetBtn.addEventListener("click", () => {
  buttons.forEach((btn) => btn.classList.remove("btn-active"));
  billInput.value = "";
  peopleInput.value = "";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});
