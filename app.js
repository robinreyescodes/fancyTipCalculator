const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
// const tipBtns = document.querySelectorAll(".btn");
const tipBtns = document.querySelector(".tip-btns");
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

tipBtns.addEventListener("click", (e) => {
  //style changes when btn clicked
  e.target.classList.toggle("btn-active");
  //store tip percent in variable
  tipTotal = billValue * Number(e.target.value.slice(0, -1) / 100);
  console.log(tipTotal);
});

//gets how many ways the bill needs to be split in
peopleInput.addEventListener("keyup", (e) => {
  peopleValue = Number(e.target.value);
  tipPerPerson = tipTotal / peopleValue;
  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${((billValue + tipTotal) / peopleValue).toFixed(
    2
  )}`;
});

//resets all the values
resetBtn.addEventListener("click", () => {
  // tipBtns.forEach((btn) => btn.classList.remove("btn-active"));
  billInput.value = "";
  peopleInput.value = "";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});
