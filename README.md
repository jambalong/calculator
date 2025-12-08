# Calculator

This project is part of The Odin Project: [Calculator](https://www.theodinproject.com/lessons/foundations-calculator), where I build a basic calculator that performs simple math operations.

It includes the four primary operations: addition, subtraction, multiplication, and division.

Live Demo: [https://jambalong.com/calculator/](http://jambalong.github.io/calculator/)

## Features

- Perform basic arithmetic operations: add, subtract, multiply, and divide.
- Display that updates with user input and the result of operations.
- A "Clear" button to reset the calculator and start fresh.
- Ability to chain calculations using previous results.
- Rounding of answers with long decimals to prevent display overflow.
- Error handling for invalid operations (e.g., dividing by 0).

### Extra Credit Features:
- Add support for decimal numbers with a decimal point button.
- Style improvements: distinguish operations from the keypad with different colors.
- A "Backspace" button to undo input mistakes.

## Assignment Breakdown

1. **Calculator Functions**
    - Create functions to handle basic arithmetic: `add`, `subtract`, `multiply`, and `divide`.
    - Write a function `operate` that takes an operator and two numbers, then calls the appropriate arithmetic function.

2. **HTML Calculator Layout**
    - Build a basic calculator interface with buttons for digits, operators, an "Equals" button, and a "Clear" button.
    - Add a display that shows user input and the result.

3. **JavaScript Logic**
    - Write the logic to capture user input and display it on the calculator screen.
    - Store input values and operators, then perform calculations using the `operate` function.
    - Update the display with the result after each operation.

4. **Handle Edge Cases and Bugs**
    - Prevent multiple calculations from being evaluated at once.
    - Round answers with long decimals.
    - Ensure pressing "=" without full input doesn't break the calculator.
    - Display an error message if the user tries to divide by 0.

5. **Extra Credit**
    - Add decimal support, ensuring no more than one decimal point per number.
    - Improve CSS styling for a more polished look.
    - Add a "Backspace" button for corrections.
    - Enable keyboard support for efficient input.

## Installation Instructions

1. Clone the repository to your local machine
   ```bash
   git clone https://github.com/jambalong/calculator.git
   ```

3. Navigate into the project directory
   ```bash
   cd calculator/
   ```

5. Open the `index.html` file in your browser to use the calculator.

6. For development:
  
   - Open the project in your favorite code editor.
   - Use live server or similar tools to preview the project in your browser.
