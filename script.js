const emptyValue = '';
const defaultValue = '0';

function add(previousNumber, currentNumber) {
  return parseFloat(previousNumber) + parseFloat(currentNumber);
}

function subtract(previousNumber, currentNumber) {
  return parseFloat(previousNumber) - parseFloat(currentNumber);
}

function multiply(previousNumber, currentNumber) {
  return parseFloat(previousNumber) * parseFloat(currentNumber);
}

function divide(previousNumber, currentNumber) {
  return parseFloat(previousNumber) / parseFloat(currentNumber);
}


let currentOperator = emptyValue;

let previousNumber = emptyValue;
let currentNumber = emptyValue;


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
  if (previousNumber.length == 0) {
    return;
  }

  const currentEvaluation = operate(currentOperator, previousNumber, currentNumber);

  currentOperator = emptyValue;
  previousNumber = emptyValue;
  currentNumber = currentEvaluation;
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
