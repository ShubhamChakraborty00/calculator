console.log("test");

function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

function operate(operand1, operator, operand2) {
    if (operator === '+') {
        return add(operand1, operand2);
    }
    else if (operator === '-') {
        return subtract(operand1, operand2);
    }
    if (operator === '*') {
        return multiply(operand1, operand2);
    }
    if (operator === '/') {
        return divide(operand1, operand2);
    }
}

const operandsList = Array.from(document.querySelectorAll(".operand"));
const operatorsList = Array.from(document.querySelectorAll(".operator"));
const clearBtn = document.querySelector("#clear");

const display = document.querySelector(".display");

let operand1 = 0, operand2 = 0, operator = '';

let dotFlag = 0, minusFlag = 0, operatorFlag = 0;

/*operatorFlag = 0 : no operator has been used

opeartorFlag = 1 : one operator has been used but no number has been entered after, if another operator is used now, 
operator will be changed

operatorFlag = 2 : one operator has been used and another number has been entered, now if any operator is used, it will : 
- display the result and store it as operand1
- change current operator to whatever operator was entered last
- set operatorFlag to 1
*/


clearBtn.addEventListener('click', (event) => {
    operand1 = operand2 = operatorFlag = 0;
    operator = '';
    display.textContent = '';
})


operandsList.forEach((element) => {
    element.addEventListener('click', (event) => {
        
        if (operatorFlag == 0) {
            switch (element.id) {
                case 'one' : display.textContent += '1'; operand1 = operand1*10 + 1;break;
                case 'two' : display.textContent += '2'; operand1 = operand1*10 + 2; break;
                case 'three' : display.textContent += '3'; operand1 = operand1*10 + 3; break;
                case 'four' : display.textContent += '4'; operand1 = operand1*10 + 4; break;
                case 'five' : display.textContent += '5'; operand1 = operand1*10 + 5; break;
                case 'six' : display.textContent += '6'; operand1 = operand1*10 + 6; break;
                case 'seven' : display.textContent += '7'; operand1 = operand1*10 + 7; break;
                case 'eight' : display.textContent += '8'; operand1 = operand1*10 + 8; break;
                case 'nine' : display.textContent += '9'; operand1 = operand1*10 + 9; break;
                case 'zero' : display.textContent += '0'; operand1 = operand1*10 + 0; break;
                case 'dot' : {
                    if (display.textContent === "") {
                        display.textContent += '0.';
                        dotFlag = 1;
                    }
                    else if (!dotFlag) {
                        display.textContent += '.';
                        dotFlag = 1;
                    }
                    break;
                };
                case 'plus-minus' : {
                    if (!minusFlag) {
                        display.textContent = `-${display.textContent}`;
                        minusFlag = 1;
                    }
                    else {
                        display.textContent = display.textContent.slice(1);
                        minusFlag = 0;
                    }
                    break;
                };
            }
        }
        else if (operatorFlag == 1 || operatorFlag == 2) {
            switch (element.id) {
                case 'one' : display.textContent += '1'; operand2 = operand2*10 + 1; operatorFlag = 2; break;
                case 'two' : display.textContent += '2'; operand2 = operand2*10 + 2; operatorFlag = 2; break;
                case 'three' : display.textContent += '3'; operand2 = operand2*10 + 3; operatorFlag = 2; break;
                case 'four' : display.textContent += '4'; operand2 = operand2*10 + 4; operatorFlag = 2; break;
                case 'five' : display.textContent += '5'; operand2 = operand2*10 + 5; operatorFlag = 2; break;
                case 'six' : display.textContent += '6'; operand2 = operand2*10 + 6; operatorFlag = 2; break;
                case 'seven' : display.textContent += '7'; operand2 = operand2*10 + 7; operatorFlag = 2; break;
                case 'eight' : display.textContent += '8'; operand2 = operand2*10 + 8; operatorFlag = 2; break;
                case 'nine' : display.textContent += '9'; operand2 = operand2*10 + 9; operatorFlag = 2; break;
                case 'zero' : display.textContent += '0'; operand2 = operand2*10 + 0; operatorFlag = 2; break;
                case 'dot' : {
                    if (!dotFlag) {
                        display.textContent += '.';
                        dotFlag = 1;
                    }
                    break;
                };
                case 'plus-minus' : {
                    if (!minusFlag) {
                        display.textContent = `-${display.textContent}`;
                        minusFlag = 1;
                    }
                    else {
                        display.textContent = display.textContent.slice(1);
                        minusFlag = 0;
                    }
                    break;
                };
            }
        }
    });
});


operatorsList.forEach((element) => {
    element.addEventListener('click', (event) => {
        if (operatorFlag == 0 || operatorFlag == 1){
            switch (element.id) {
                case 'plus': operator = '+'; break;
                case 'subtract': operator = '-'; break;
                case 'multiply': operator = '*'; break;
                case 'divide': operator = '/';  break;
            }
            display.textContent = ""
            operatorFlag = 1;
        }
        else if (operatorFlag == 2){
            operand1 = operate(operand1, operator, operand2)
            switch (element.id) {
                case 'plus': operator = '+'; break;
                case 'subtract': operator = '-'; break;
                case 'multiply': operator = '*'; break;
                case 'divide': operator = '/'; break;
                case 'equals': operatorFlag = 1; operand2 = 0; break;     
                //If equals is used then it means we have one number and no operands
            }
            if (operand1 === Infinity) {
                display.textContent = `Hello?`;

            }
            else {
                display.textContent = `${operand1}`;
            }
            --operatorFlag;
        }
    });
});

