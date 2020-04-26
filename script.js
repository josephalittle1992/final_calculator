let numBtns = document.querySelectorAll('[data-number]');

function displayUpdate(value) {
    let displaySpan = document.getElementById('display');
    displaySpan.textContent = value;
}

numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        displayUpdate(btn.innerHTML);
    });
});

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

    console.log(numBtns);

}

init();