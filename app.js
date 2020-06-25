import {addition, subtract, multiply, divide} from './utils.js';

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

const additionButton = document.getElementById('addition-button');
const subtractionButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

additionButton.addEventListener('click', () => {
    const addValue1 = addInput1.value;
    const addValue2 = addInput2.value;

    const displaySum = addition(addValue1, addValue2);

    boogerSpan.textContent = displaySum;
});

subtractionButton.addEventListener('click', () => {
    const subtractValue1 = addInput1.value;
    const subtractValue2 = addInput2.value;

    const displayDifference = subtract(subtractValue1 - subtractValue2);

    boogerSpan.textContent = displayDifference;
});

multiplyButton.addEventListener('click', () => {
    const multiplyValue1 = addInput1.value;
    const multiplyValue2 = addInput2.value;

    const displayProduct = multiply(multiplyValue1, multiplyValue2);

    boogerSpan.textContent = displayProduct;
});

divideButton.addEventListener('click', () => {
    const divideValue1 = addInput1.value;
    const divideValue2 = addInput2.value;

    const displayQuotient = divide(divideValue1, divideValue2);

    boogerSpan.textContent = displayQuotient;
});

