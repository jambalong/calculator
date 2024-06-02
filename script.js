const emptyValue = '';
const zeroValue = '0';
const decimalPoint = '.';

let currentOperator = null;
let previousNumber = null;
let currentNumber = null;

let previousEvaluation = false;

/*
This function first checks if the argument is a number (Number(number) === number) to exclude
non-numeric values. Then, it checks if the number is not an integer (number % 1 !== 0),
indicating that it has a fractional part.
*/

function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

function add(previousNumber, currentNumber) {
  return Number(previousNumber) + Number(currentNumber);
}

function subtract(previousNumber, currentNumber) {
  return Number(previousNumber) - Number(currentNumber);
}

function multiply(previousNumber, currentNumber) {
  return Number(previousNumber) * Number(currentNumber);
}

function divide(previousNumber, currentNumber) {
  return Number(previousNumber) / Number(currentNumber);
}

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

  if (previousEvaluation) {
    currentNumber = emptyValue;
    previousEvaluation = false;
  }
  
  if (clickedNumber == decimalPoint && currentNumber == emptyValue) {
    currentNumber += zeroValue;
    currentNumber += clickedNumber;
    updateDisplay();
  } else if (clickedNumber == decimalPoint && currentNumber.includes(decimalPoint)) {
    return;
  } else {
    currentNumber += clickedNumber;
    updateDisplay();
  }
}

function handleOperatorClick(event) {
  const clickedOperator = event.target.textContent;
  const equals = '=';

  if (clickedOperator == equals) {
    handleEqualsOperator(clickedOperator);
  } else {
    handleNonEqualsOperator(clickedOperator);
  }
}

function handleEqualsOperator(clickedOperator) {
  if (previousNumber == emptyValue || currentNumber == emptyValue) {
    return;
  }

  previousEvaluation = true;

  if (currentNumber == zeroValue && currentOperator == '/') {
    display.textContent = 'uwu';
    initializeNumbers();
    currentNumber = zeroValue;
    return;
  }

  const currentEvaluation = operate(currentOperator, previousNumber, currentNumber);
  
  currentOperator = emptyValue;
  previousNumber = emptyValue;

  currentNumber = isFloat(currentEvaluation) ? currentEvaluation.toFixed(2) : currentEvaluation.toFixed(0);
  
  updateDisplay();
}

function handleNonEqualsOperator(clickedOperator) {
  if (currentNumber == emptyValue && previousNumber == emptyValue) {
    return;
  }

  if (previousNumber.length == 0) {
    previousNumber = currentNumber;
    currentNumber = emptyValue;
  } else if (currentNumber.length > 0) {
    return;
  }

  currentOperator = clickedOperator;
  updateDisplay();
}

function handleFunctionKeys(event) {
  const clickedFunction = event.target.textContent;

  switch (clickedFunction) {
    case 'AC':
      handleAllClear();
      break;
    case '+/-':
      handleSign();
      break;
    case '%':
      handlePercent();
      break;
  }
}

function handleAllClear() {
  initializeNumbers();
  currentNumber = zeroValue;
  updateDisplay();
  currentNumber = emptyValue;
}

function handleSign() {
  currentNumber = (currentNumber * -1).toString();
  updateDisplay();
}

function handlePercent() {
  currentNumber = (currentNumber / 100).toString();
  updateDisplay();
}

function handleClearEntry() {
  let currentEntry = currentNumber;
  const isPositive = currentEntry > 0;
  const isNegative = currentEntry < 0;

  previousEvaluation = false;

  if (isPositive || isNegative) {
    currentEntry = currentEntry.substring(0, currentEntry.length - 1);
  }

  if (currentEntry == emptyValue || currentEntry == '-') {
    currentEntry = zeroValue;
  }

  currentNumber = currentEntry;
  updateDisplay();

  if (currentNumber == zeroValue) {
    currentNumber = emptyValue;
  }
}

function initializeNumbers() {
  currentOperator = emptyValue;
  previousNumber = emptyValue;
  currentNumber = emptyValue;
}

initializeNumbers();

const numberKeys = document.querySelectorAll('#number-keys button');
const operatorKeys = document.querySelectorAll('#operator-keys button');
const functionKeys = document.querySelectorAll('#function-keys button');
const clearEntry = document.querySelector('#clear-entry');

numberKeys.forEach(button => button.addEventListener('click', handleNumberClick));
operatorKeys.forEach(button => button.addEventListener('click', handleOperatorClick));
functionKeys.forEach(button => button.addEventListener('click', handleFunctionKeys));
clearEntry.addEventListener('click', handleClearEntry);
