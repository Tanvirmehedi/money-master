// Calculation Button Click
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    calculateBalance();
    getInputValue("income-input-box");
  });

//   Savings Button Click
document.getElementById("saving-button").addEventListener("click", function () {
  getRemainingBalance();
});

// GET SAVING
function calculateSaving() {
  const monthlyIncome = getInputValue("income-input-box");
  const parentageValue = getInputValue("saving-input-box");
  const parentage = (monthlyIncome * parentageValue) / 100;
  if (parentage <= calculateBalance()) {
    getDisplayOutput("saving-amount", parentage);
    return parentage;
  } else {
    errorMessage("Insufficient Balance To save !!");
  }
}

// GET REMAINING BALANCE

function getRemainingBalance() {
  const balance = calculateBalance();
  const saving = calculateSaving();
  const remainingBalance = balance - saving;
  getDisplayOutput("remaining-balance", remainingBalance);
}

//   HANDLE INPUT FIELD
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  if (inputFieldValue >= 0 && inputFieldValue != "") {
    const inputTextConvert = parseFloat(inputFieldValue);
    return inputTextConvert;
  } else {
    errorMessage("SomeThing Wrong in==", id);
    inputField.value = "";
  }
}

// MONTHLY EXPENSE CALCULATION

function getMonthlyExpenseTotal() {
  const pocketMoney = getInputValue("pocketMoney-input-box");
  const homeRent = getInputValue("homeRent-input-box");
  const foodStuff = getInputValue("food-input-box");
  const totalExpanse = pocketMoney + homeRent + foodStuff;
  getDisplayOutput("display-total-expense", totalExpanse);
  return totalExpanse;
}

// CALCULATE BALANCE AFTER EXPANSE
function calculateBalance() {
  const monthlyIncome = getInputValue("income-input-box");
  const totalExpense = getMonthlyExpenseTotal();
  if (monthlyIncome >= totalExpense) {
    const balance = monthlyIncome - totalExpense;
    getDisplayOutput("display-balance", balance);
    return balance;
  } else {
    errorMessage("Your Expense Is To High Control Your Self");
  }
}

// DISPLAY RETURNS
function getDisplayOutput(id, returnValue) {
  const displayId = document.getElementById(id);
  if (isNaN(returnValue) != true) {
    displayId.innerText = returnValue;
  }
}

// ERROR HANDLING

function errorMessage(text) {
  const err = document.getElementById("error");
  err.style.display = "block";
  err.classList.remove = "hidden";
  err.innerText = text;
}
