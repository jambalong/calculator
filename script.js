function add(previousNumber, currentNumber) {
  return previousNumber + currentNumber;
}

function subtract(previousNumber, currentNumber) {
  return previousNumber - currentNumber;
}

function multiply(previousNumber, currentNumber) {
  return previousNumber * currentNumber;
}

function divide(previousNumber, currentNumber) {
  return previousNumber * currentNumber;
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
