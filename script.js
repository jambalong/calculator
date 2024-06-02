const emptyValue = '';
const defaultValue = '0';
const decimalPoint = '.';

function add(previousNumber, currentNumber) {
  if (previousNumber.includes(decimalPoint) || currentNumber.includes(decimalPoint)) {
    return parseFloat(previousNumber) + parseFloat(currentNumber);
  }

  return parseInt(previousNumber) + parseInt(currentNumber);
}

function subtract(previousNumber, currentNumber) {
  if (previousNumber.includes(decimalPoint) || currentNumber.includes(decimalPoint)) {
    return parseFloat(previousNumber) - parseFloat(currentNumber);
  }

  return parseInt(previousNumber) - parseInt(currentNumber);
}

function multiply(previousNumber, currentNumber) {
  if (previousNumber.includes(decimalPoint) || currentNumber.includes(decimalPoint)) {
    return parseFloat(previousNumber) * parseFloat(currentNumber);
  }

  return parseInt(previousNumber) * parseInt(currentNumber);
}

function divide(previousNumber, currentNumber) {
  if (previousNumber.includes(decimalPoint) || currentNumber.includes(decimalPoint)) {
    return parseFloat(previousNumber) / parseFloat(currentNumber);
  }

  return parseInt(previousNumber) / parseInt(currentNumber);
}


let currentOperator = emptyValue;

let previousNumber = emptyValue;
let currentNumber = emptyValue;

let previousEvaluation = false;

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

  if (previousEvaluation == true) {
    currentNumber = emptyValue;
    previousEvaluation = false;
  }
  
  if (clickedNumber == decimalPoint && currentNumber == emptyValue) {
    currentNumber += defaultValue;
    currentNumber += clickedNumber;
    updateDisplay();
  } else if (clickedNumber == decimalPoint && currentNumber.includes(decimalPoint)) {
    return;
  } else {
    currentNumber += clickedNumber;
    updateDisplay();
  }
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

function handleOperatorClick(event) {
  const clickedOperator = event.target.textContent;
  const equals = '=';

  if (clickedOperator == equals) {
    handleEqualsOperator(clickedOperator);
  } else {
    handleNonEqualsOperator(clickedOperator);
  }
}

/*
This function first checks if the argument is a number (Number(number) === number) to exclude
non-numeric values. Then, it checks if the number is not an integer (number % 1 !== 0),
indicating that it has a fractional part.
*/

function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

function handleEqualsOperator(clickedOperator) {
  if (previousNumber.length == 0) {
    return;
  }

  previousEvaluation = true;

  const currentEvaluation = operate(currentOperator, previousNumber, currentNumber);
  
  currentOperator = emptyValue;
  previousNumber = emptyValue;

  if (isFloat(currentEvaluation)) {
    currentNumber = currentEvaluation.toFixed(2);
  } else {
    currentNumber = currentEvaluation;
  }
  
  updateDisplay();
}

function handleNonEqualsOperator(clickedOperator) {
  if (previousNumber.length == 0) {
    previousNumber = currentNumber;
    currentNumber = emptyValue;
  } else if (currentNumber.length > 0) {
    return;
  }

  currentOperator = clickedOperator;
  updateDisplay();
}

const operatorKeys = document.querySelectorAll('#operator-keys button');

operatorKeys.forEach(button => {
  button.addEventListener('click', handleOperatorClick);
})
