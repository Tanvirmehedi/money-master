// Calculation Button Click
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    getMonthlyIncome();
  });

// GET MONTHLY EXPENSES

//   GET MONTHLY INCOME

function getMonthlyIncome() {
  const incomeInputField = document.getElementById("income-input-box");
  const incomeInputValue = incomeInputField.value;
  if (incomeInputValue >= 0 && incomeInputValue != 0) {
    const incomeTextConvert = parseFloat(incomeInputValue);
    incomeInputField.value = "";
    return console.log(incomeTextConvert);
  } else {
    errorMessage("Please Give Your Monthly Income As Number!!");
  }
}

// ERROR HANDLING

function errorMessage(text) {
  alert(text);
}
