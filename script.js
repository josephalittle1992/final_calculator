let numBtns = document.querySelectorAll('[data-number]');
let displaySpan = document.getElementById('display');
let disUpValue = ''; //displayUpdate() var
let operating = ''; //stores 1st number of calculation when
                    //operator user presses '='
let operator = ''; //operator chosen for calculation

//number buttons
numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        displayUpdate(btn.innerHTML);
    });
});


//clear button
document.getElementById('clear').addEventListener('click', () => {
    disUpValue = '';
    displaySpan.innerHTML = '';
});

//lets multiple numbers be added to display span
function displayUpdate(value) {
    disUpValue = disUpValue.concat(value);
    displaySpan.innerHTML = disUpValue;
}

function add(a, b) {
    return a + b;
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(operator, num1, num2) {
    //Create a new function operate that takes an operator 
    //and 2 numbers and then calls one of the above 
    //functions on the numbers.
}

function init() {

}

init();