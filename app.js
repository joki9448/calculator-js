const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
    const value = button.textContent

    calculation.push(value)
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent = accumulativeCalculation

    console.log(calculation)
};

buttons.forEach((btn) => btn.addEventListener('click', () => calculate(btn)))