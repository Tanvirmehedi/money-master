// Calculation Button Click
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    calculateBalance();
  });

document.getElementById("saving-button").addEventListener("click", function () {
  console.log(getInputValue("saving-input-box"));
});

//   HANDLE INPUT FIELD
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  if (inputFieldValue >= 0 && inputFieldValue != "") {
    const inputTextConvert = parseFloat(inputFieldValue);
    inputField.value = "";
    return inputTextConvert;
  } else {
    errorMessage("SomeThing Wrong ");
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
  } else {
    errorMessage("Your Expense Is To High Control Your Self");
  }
}

// DISPLAY RETURNS
function getDisplayOutput(id, returnValue) {
  const displayId = document.getElementById(id);
  if (isNaN(returnValue) != true) {
    displayId.innerText = returnValue;
  } else {
    errorMessage("Value Empty");
  }
}

// ERROR HANDLING

function errorMessage(text) {
  alert(text);
}
