// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 2 & 3: Variables for game functionality
let number1, number2, operator, result; // Variables for the two numbers, operator, and result

// Elements corresponding to the numbers and result in the HTML
const number1Element = document.getElementById('number1');
const number2Element = document.getElementById('number2');

// Iteration 4: Creating a variable for number 3 and storing the HTML element with the ID "number3"
const number3Element = document.getElementById('number3');

// Iteration 5: Randomize function
function randomize() {
  // Generate random numbers for number1 and number2
  number1 = Math.floor(Math.random() * 101);
  number2 = Math.floor(Math.random() * 101);
  
  // Select a random operator from the array of operators
  const operators = ['+', '-', '*', '/', '%'];
  operator = operators[Math.floor(Math.random() * operators.length)];
  
  // Display the numbers in the respective HTML elements
  number1Element.textContent = number1;
  number2Element.textContent = number2;
  
  // Calculate the result based on the operator
  calculateResult();
}

function calculateResult() {
  // Calculate the result based on the selected operator
  switch(operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = Math.floor(number1 / number2); // Integer division
      break;
    case '%':
      result = number1 % number2;
      break;
  }
  // Display the result in the number3 element
  number3Element.textContent = result;
}

// Iteration 6: Operator buttons functionality
document.getElementById('plus').addEventListener('click', () => checkOperator('+'));
document.getElementById('minus').addEventListener('click', () => checkOperator('-'));
document.getElementById('mul').addEventListener('click', () => checkOperator('*'));
document.getElementById('divide').addEventListener('click', () => checkOperator('/'));
document.getElementById('modulus').addEventListener('click', () => checkOperator('%'));

function checkOperator(selectedOperator) {
  // Check if the selected operator matches the generated operator
  if (selectedOperator === operator) {
    alert('Correct!');
  } else {
    alert('Incorrect! Try again.');
  }
  randomize(); // Reset for new round
}

// Iteration 7: Timer functionality
let timerElement = document.getElementById('timer');
let timer = 30;

function startTimer() {
  let interval = setInterval(() => {
    timer--;
    timerElement.textContent = timer;
    if (timer <= 0) {
      clearInterval(interval);
      alert('Time\'s up! Game over.');
      // Optionally reset the game or end
    }
  }, 1000);
}

window.onload = () => {
  randomize();
  startTimer();
}
