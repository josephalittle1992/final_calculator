let numBtns = document.querySelectorAll('[data-number]');
let displaySpan = document.getElementById('display');
let disUpValue = ''; //displayUpdate() var
let operating = []; //stores number for calculation when
                    //operator user presses '='
let operator = '';
let result = '';



//number buttons
numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        displayUpdate(btn.innerHTML);
    });
});

//lets multiple numbers be added to display span
function displayUpdate(value) {
    disUpValue = disUpValue.concat(value);
    displaySpan.innerHTML = disUpValue;
}


//clear button
document.getElementById('clear').addEventListener('click', () => {
    disUpValue = '';
    displaySpan.innerHTML = '';
    operating = [];
});

//equals button
document.getElementById('equals').addEventListener('click', () => {

});

//addition button
document.getElementById('plus').addEventListener('click', () => {

});



function operate(op, num1, num2) {
    switch (op) {
        case 'plus':
    }
}

function add(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
}

function subtract() {

}

function multiply() {

}

function divide() {

}



function init() {

}

init();