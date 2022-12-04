const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const tipBtns = document.querySelectorAll(".btn");
const aBtn = document.querySelector(".btn");
const resetBtn = document.querySelector(".reset-btn");
let tipPercent = 0;
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
tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipBtns.forEach((btn) => btn.classList.remove("btn-active"));
    btn.classList.toggle("btn-active");
    //stores selected tip percentage in variable, turns to number form
    tipPercent = Number(e.target.value.slice(0, -1));
    //changes visual of tip amount
    tipAmount.textContent = `$${((billValue * tipPercent) / 100).toFixed(2)}`;
    totalValue = billValue + (billValue * tipPercent) / 100;
  });
});

//gets how many ways the bill needs to be split in
peopleInput.addEventListener("keyup", (e) => {
  peopleValue = Number(e.target.value);
  totalAmount.textContent = `$${(totalValue / peopleValue).toFixed(2)}`;
});

//resets all the values
resetBtn.addEventListener("click", () => {
  tipBtns.forEach((btn) => btn.classList.remove("btn-active"));
  billInput.value = "";
  peopleInput.value = "";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});
