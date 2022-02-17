// Calculation Button Click
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const err = (document.getElementById("error").style.display = "none");
    calculateBalance();
    getInputValue("food-input-box");
    getInputValue("homeRent-input-box");
    getInputValue("pocketMoney-input-box");
    getInputValue("income-input-box");
  });

//   Savings Button Click
document.getElementById("saving-button").addEventListener("click", function () {
  const err = (document.getElementById("error").style.display = "none");
  getRemainingBalance();
  getInputValue("saving-input-box");
});

// GET SAVING
function calculateSaving() {
  const monthlyIncome = getInputValue("income-input-box");
  const parentageValue = getInputValue("saving-input-box");
  const parentage = (monthlyIncome * parentageValue) / 100;
  if (parentage <= calculateBalance()) {
    getDisplayOutput("saving-amount", parentage);
    return parentage;
  } else{
    errorMessage("Insufficient Balance To save !! Your Monthly Income  Is = ",monthlyIncome);
  }
    if(monthlyIncome == undefined){
     getInputValue('income-input-box')
    }
}

// GET REMAINING BALANCE

function getRemainingBalance() {
  const balance = calculateBalance();
  const saving = calculateSaving();
  const remainingBalance = balance - saving;
  getDisplayOutput("remaining-balance", remainingBalance.toFixed(2));
}

//   HANDLE INPUT FIELD
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  if (inputFieldValue >= 0 && inputFieldValue != "") {
    const inputTextConvert = parseFloat(inputFieldValue);
    return inputTextConvert;
  } else {
    errorMessage("Please Give Valid Number In  = ", id);
    inputField.value = "";
  }
}


// CALCULATE BALANCE AFTER EXPANSE
function calculateBalance() {
  const monthlyIncome = getInputValue("income-input-box");
  const totalExpense = getMonthlyExpenseTotal();
  const balance = monthlyIncome - totalExpense;
  if (monthlyIncome >= totalExpense) {
    getDisplayOutput("display-balance", balance);
    return balance;
  } else {
    errorMessage("Your Expense Is To High Control Your Self!! This Month Your Extra Expanse Is = ", balance);
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


// DISPLAY RETURNS
function getDisplayOutput(id, returnValue) {
  const displayId = document.getElementById(id);
  if (isNaN(returnValue) != true) {
    displayId.innerText = returnValue;
  }
}

// ERROR HANDLING

function errorMessage(text, id) {
  const err = document.getElementById("error");
  err.style.display = "block";
  err.innerText = text + id;
}
