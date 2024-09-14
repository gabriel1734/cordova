document.addEventListener('DOMContentLoaded', generateQuestion, false);

let currentAnswer = 0;

function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const operator = operations[getRandomInt(0, operations.length - 1)];
    switch (operator) {
        case '+':
            currentAnswer = num1 + num2;
            break;
        case '-':
            currentAnswer = num1 - num2;
            break;
        case '*':
            currentAnswer = num1 * num2;
            break;
        case '/':
            currentAnswer = num1 / num2;
            break;
    }
    document.getElementById('question').innerText = `${num1} ${operator} ${num2} =`;
    document.getElementById('answer').value = '';
    let btn = document.getElementById('btnSub');
    btn.addEventListener('click', checkAnswer, false)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === currentAnswer) {
        navigator.vibrate(2000)
        generateQuestion()
    } else {
        navigator.vibrate(2000)
        generateQuestion()
    }
}

function vibrate(duration) {
    if (navigator.vibrate) {
        navigator.vibrate(duration);
    } else {
        console.log(`Vibrate for ${duration} milliseconds`);
    }
}
