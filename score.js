// Iteration 8: Making scoreboard functional
// game.js
let score = 0;

document.getElementById('score-box').innerText = `Score: ${score}`;

const correctOperator = (num1, num2, result) => {
    if (num1 + num2 === result) return 'plus';
    if (num1 - num2 === result) return 'minus';
    if (num1 * num2 === result) return 'mul';
    if (num1 / num2 === result) return 'divide';
    if (num1 % num2 === result) return 'modulus';
    return null;
};

const checkAnswer = (selectedOperator) => {
    const num1 = parseInt(document.getElementById('number1').innerText);
    const num2 = parseInt(document.getElementById('number2').innerText);
    const result = parseInt(document.getElementById('number3').innerText);

    if (correctOperator(num1, num2, result) === selectedOperator) {
        score += 10;
        alert('Correct!');
    } else {
        score -= 5;
        alert('Incorrect!');
    }

    document.getElementById('score-box').innerText = `Score: ${score}`;
    // Reset numbers and operators here for the next round
};

document.getElementById('plus').addEventListener('click', () => checkAnswer('plus'));
document.getElementById('minus').addEventListener('click', () => checkAnswer('minus'));
document.getElementById('mul').addEventListener('click', () => checkAnswer('mul'));
document.getElementById('divide').addEventListener('click', () => checkAnswer('divide'));
document.getElementById('modulus').addEventListener('click', () => checkAnswer('modulus'));
