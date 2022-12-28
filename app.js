const buttons = document.querySelectorAll('button');
// console.log('buttons: ', buttons)
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumulativeCalculation;

function calculate(btn) {
    const value = btn.textContent

    calculation.push(value)
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent = accumulativeCalculation

    console.log(calculation)
};

buttons.forEach((btn) => btn.addEventListener('click', () => calculate(btn)))