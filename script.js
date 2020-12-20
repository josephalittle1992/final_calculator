//Add keyboard functionality
//Add timeout + clear calculator if result is too large
//Fix decimal system, floating #s?


let numBtns = document.querySelectorAll('[data-number]');
let calcBtns = document.querySelectorAll('[calculation]');
let displaySpan = document.getElementById('display');
let displayedNumber = displaySpan.innerHTML;
let calcStack = [];

class calc {
    constructor(value, operator) {
        this.value = parseInt(value);
        this.operator = operator;
        this.wasEquals = false;
        this.previous = null;
    }
}

function calculate(stack1, stack2) {
    let result = null;
    result = eval(stack1.value + ' ' + stack1.operator + ' ' + stack2.value);
    stack1.value = result;
    stack1.operator = stack2.operator;
    calcStack[0].previous = calcStack[1].value;
    calcStack.pop();
    if (result.toString().length > 18) {
        alert('Result is too large');
        init();
    } else {
        displaySpan.innerHTML = result;
    }
}

//equals button
document.getElementById('equals').addEventListener('click', () => {
    if (displayedNumber == 0 && calcStack[0].wasEquals == false) {
        calcStack[0].previous = calcStack[0].value;
        displaySpan.innerHTML = eval(displaySpan.innerHTML + ' ' + calcStack[0].operator + ' ' + calcStack[0].value);
        calcStack[0].wasEquals = true;
    } else if (displayedNumber == 0 && calcStack[0].wasEquals == true) {
        displaySpan.innerHTML = eval(displaySpan.innerHTML + ' ' + calcStack[0].operator + ' ' + calcStack[0].previous);
    } else if (!calcStack.length) {
        displaySpan.innerHTML = displaySpan.innerHTML;
    }else {
        calcStack.push(new calc(displayedNumber, calcStack[0].operator));
        displayedNumber = 0;
        if (calcStack.length == 2) {
            calculate(calcStack[0], calcStack[1]);
            calcStack[0].wasEquals = true;
        }
        console.log(calcStack);
    }


});

calcBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        function cleanCalc() {
            if (displayedNumber == '0') {
                if (calcStack[0] && calcStack[0].previous) {
                    calcStack[0].value = calcStack[0].previous;
                    displaySpan.innerHTML = calcStack[0].previous;
                } else {
                    displaySpan.innerHTML = calcStack[0].value;
                }
                
                calcStack[0].operator = btn.innerHTML;
            } else {
                calcStack.push(new calc(displayedNumber, btn.innerHTML));
                displayedNumber = 0;
                if (calcStack.length == 2) {
                    calculate(calcStack[0], calcStack[1]);
                }
            }
            console.log(calcStack);
        }
        if (calcStack[0] && calcStack[0].wasEquals == true) {
            calcStack[0].value = displaySpan.innerHTML;
            calcStack[0].wasEquals = false;
        }
        if (calcStack.length == 0 && displayedNumber == '0') {
            return;
        }
        cleanCalc();
    });
});

numBtns.forEach(btn => {
    btn.addEventListener('click', (_btn) => {
        if (calcStack[0] && calcStack[0].wasEquals == true) {
            init();
            calcStack = [];
        }
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