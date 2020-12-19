//Add keyboard functionality

let numBtns = document.querySelectorAll('[data-number]');
let calcBtns = document.querySelectorAll('[calculation]');
let displaySpan = document.getElementById('display');
let displayedNumber = displaySpan.innerHTML;
let calcStack = [];

class calc {
    constructor(value, operator) {
        this.value = parseInt(value);
        this.operator = operator;
    }
}

function calculate(stack1, stack2) {
    let result = null;
    switch (stack1.operator) {
        case '+':
            result = stack1.value + stack2.value;
            break;
        case '-':
            result = stack1.value - stack2.value;
            break;
    }
    stack1.value = result;
    stack1.operator = stack2.operator;
    calcStack.pop();
    if (result.toString().length > 18) {
        displaySpan.innerHTML = 'Result too large.';
    } else {
        displaySpan.innerHTML = result;
    }

}

calcBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        switch (btn.innerHTML) {
            case '+':
                if (displayedNumber == '0') {
                    calcStack[0].operator = '+';
                }
                calcStack.push(new calc(displayedNumber, btn.innerHTML));
                displayedNumber = 0;
                if (calcStack.length == 2) {
                    calculate(calcStack[0], calcStack[1]);
                }
                console.log(calcStack);
                break;
            case '-':
                if (displayedNumber == '0') {
                    calcStack[0].operator = '-';
                }
                calcStack.push(new calc(displayedNumber, btn.innerHTML));
                displayedNumber = 0;
                if (calcStack.length == 2) {
                    calculate(calcStack[0], calcStack[1]);
                }
                console.log(calcStack);
                break;
        }
    });
});

numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        //if 0 is displayed then start new number
        if (displayedNumber == '0') {
            displaySpan.innerHTML = '';
        }
        //if displayed number contains a decimal don't add a new decimal
        //stop displayed number from going off screen by limiting it to 18 characters
        //then keep adding numbers to displayed number
        if (btn.innerHTML == '.' && displayedNumber.includes('.')) {
            displaySpan.innerHTML = displayedNumber;
        } else if (displayedNumber.length == 18) {
            displaySpan.innerHTML = displayedNumber;
        } else {
            displaySpan.innerHTML = displaySpan.innerHTML.concat(btn.innerHTML);
            displayedNumber = displaySpan.innerHTML;
        }

    });
});

//clear button
document.getElementById('clear').addEventListener('click', () => {
    init();
    calcStack = [];
});

//initialize calculator displayed and stored values to 0
function init() {
    displayedNumber = '0';
    displaySpan.innerHTML = '0';
    console.clear();

}

init();