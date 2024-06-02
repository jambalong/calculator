const emptyValue = '';
const defaultValue = '0';

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

let previousNumber = emptyValue;
let currentNumber = emptyValue;

let currentOperator = emptyValue;

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
  const decimalPoint = '.';

  if (clickedNumber == decimalPoint && currentNumber.includes(decimalPoint)) {
    return;
  }

  currentNumber += clickedNumber;
  updateDisplay();
}

const numberKeys = document.querySelectorAll('#number-keys button');

numberKeys.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});

const allClear = document.querySelector('#function-keys #all-clear');

allClear.addEventListener('click', () => {
  previousNumber = emptyValue;
  currentNumber = defaultValue;
  currentOperator = emptyValue;

  updateDisplay();

  currentNumber = emptyValue;
})
