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
