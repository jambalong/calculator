function add(previousNumber, currentNumber) {
  return parseInt(previousNumber) + parseInt(currentNumber);
}

function subtract(previousNumber, currentNumber) {
  return parseInt(previousNumber) - parseInt(currentNumber);
}

function multiply(previousNumber, currentNumber) {
  return parseInt(previousNumber) * parseInt(currentNumber);
}

function divide(previousNumber, currentNumber) {
  return parseInt(previousNumber) * parseInt(currentNumber);
}

let previousNumber = '';
let currentNumber = '';

let currentOperator = '';

function operate(currentOperator, previousNumber, currentNumber) {
  switch (currentOperator) {
    case '+':
      return add(previousNumber, currentNumber);
      break;
    case '-':
      return subtract(previousNumber, currentNumber);
      break;
    case '*':
      return multiply(previousNumber, currentNumber);
      break;
    case '/':
      return divide(previousNumber, currentNumber);
      break;
  }
}

function updateDisplay() {
  const display = document.querySelector("#display");
  const displayValue = `${previousNumber} ${currentOperator} ${currentNumber} `;

  display.textContent = displayValue;
}

function handleNumberClick(event) {
  const clickedNumber = event.target.textContent;
  currentNumber += clickedNumber;
  updateDisplay();
}

const numberKeys = document.querySelectorAll('#number-keys button');

numberKeys.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});

const allClear = document.querySelector('#function-keys #all-clear');

allClear.addEventListener('click', () => {
  previousNumber = '';
  currentNumber = '0';
  currentOperator = '';

  updateDisplay();

  currentNumber = '';
})
