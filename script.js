let numBtns = document.querySelectorAll('[data-number]');
let displaySpan = document.getElementById('display');
let displayValue = '0';

//number buttons

numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        if (displayValue == '0') {
            displayValue = '';
        }
        function addNumbersToDisplay(value) {
            displayValue = displayValue.concat(value);
            displaySpan.innerHTML = displayValue;
        }
        addNumbersToDisplay(btn.innerHTML);
    });
});

let firstNumber = null;
let secondNumber = null;
//addition button
document.getElementById('plus').addEventListener('click', () => {

    if (firstNumber != null) {
        let secondNumber = displayValue;
        firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
        displaySpan.innerHTML = firstNumber;
        displayValue = '';

    } else {
        firstNumber = displayValue;
        displayValue = '';
    }
    
});


//clear button
document.getElementById('clear').addEventListener('click', () => {
    a = null;
    b = null;
    displayValue = '0';
    displaySpan.innerHTML = '0';
});

//equals button
document.getElementById('equals').addEventListener('click', () => {

});



function init() {
    displaySpan.innerHTML = '0';
}

init();



