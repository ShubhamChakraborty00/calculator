function operate(operand1, operator, operand2) {
    if (operator === '+') {
        return operand1 + operand2;
    }
    else if (operator === '-') {
        return operand1 - operand2;
    }
    if (operator === '*') {
        return operand1 * operand2;
    }
    if (operator === '/') {
        return operand1 / operand2;
    }
}

const allButtonsList = Array.from(document.querySelectorAll("button"));
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


// clearBtn.addEventListener('click', (event) => {
//     document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Delete'}));
// })


allButtonsList.forEach((element) => {
    element.addEventListener('click', (event) => {
        switch (element.id) {
            case 'one' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '1'})); break;
            case 'two' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '2'})); break;
            case 'three' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '3'})); break;
            case 'four' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '4'})); break;
            case 'five' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '5'})); break;
            case 'six' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '6'})); break;
            case 'seven' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '7'})); break;
            case 'eight' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '8'})); break;
            case 'nine' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '9'})); break;
            case 'zero' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '0'})); break;
            case 'dot' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '.'})); break;
            case 'plus': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '+'})); break;
            case 'subtract': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '-'})); break;
            case 'multiply': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '*'})); break;
            case 'divide': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '/'}));  break;
            case 'equals': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Enter'}));  break;
            case 'clear': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Delete'})); break;
        }
    })
})

// operandsList.forEach((element) => {
//     element.addEventListener('click', (event) => {
        
//         switch (element.id) {
//             case 'one' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '1'})); break;
//             case 'two' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '2'})); break;
//             case 'three' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '3'})); break;
//             case 'four' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '4'})); break;
//             case 'five' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '5'})); break;
//             case 'six' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '6'})); break;
//             case 'seven' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '7'})); break;
//             case 'eight' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '8'})); break;
//             case 'nine' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '9'})); break;
//             case 'zero' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '0'})); break;
//             case 'dot' : document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '.'})); break;
//             // case 'plus-minus' : {
//             //     if (!minusFlag) {
//             //         display.textContent = `-${display.textContent}`;
//             //         minusFlag = 1;
//             //     }
//             //     else {
//             //         display.textContent = display.textContent.slice(1);
//             //         minusFlag = 0;
//             //     }
//             //     operand1 = -operand1;
//             //     break;
//             // };
//             case 'plus': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '+'})); break;
//             case 'subtract': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '-'})); break;
//             case 'multiply': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '*'})); break;
//             case 'divide': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '/'}));  break;
//             case 'equals': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Enter'}));  break;
//         }
//     });
// });


// operatorsList.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         switch (element.id) {
//             case 'plus': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '+'})); break;
//             case 'subtract': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '-'})); break;
//             case 'multiply': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '*'})); break;
//             case 'divide': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '/'}));  break;
//             case 'equals': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Enter'}));  break;
//         }
//     })
// });


//for capturing keyboard presses :

//keydown is used instead of keypress, because backspace and delete are not fired in keypress

document.addEventListener('keydown', (event) => {  
    if (event.key == 'Delete') {
        operand1 = operand2 = operatorFlag = 0;
        operator = '';
        display.textContent = '';
    }
    else if (operatorFlag == 0) {
        switch (event.key) {
            case '1' : display.textContent += '1'; operand1 = operand1*10 + 1;break;
            case '2' : display.textContent += '2'; operand1 = operand1*10 + 2; break;
            case '3' : display.textContent += '3'; operand1 = operand1*10 + 3; break;
            case '4' : display.textContent += '4'; operand1 = operand1*10 + 4; break;
            case '5' : display.textContent += '5'; operand1 = operand1*10 + 5; break;
            case '6' : display.textContent += '6'; operand1 = operand1*10 + 6; break;
            case '7' : display.textContent += '7'; operand1 = operand1*10 + 7; break;
            case '8' : display.textContent += '8'; operand1 = operand1*10 + 8; break;
            case '9' : display.textContent += '9'; operand1 = operand1*10 + 9; break;
            case '0' : display.textContent += '0'; operand1 = operand1*10 + 0; break;
            case '.' : {
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
            // case '_' : {
            //     if (!minusFlag) {
            //         display.textContent = `-${display.textContent}`;
            //         minusFlag = 1;
            //     }
            //     else {
            //         display.textContent = display.textContent.slice(1);
            //         minusFlag = 0;
            //     }
            //     operand1 = -operand1;
            //     break;
            // };
            case '+': display.textContent = ""; operator = '+'; operatorFlag = 1; break;
            case '-': display.textContent = ""; operator = '-'; operatorFlag = 1; break;
            case '*': display.textContent = ""; operator = '*'; operatorFlag = 1; break;
            case '/': display.textContent = ""; operator = '/'; operatorFlag = 1; break;
        };     
    }
    else if (operatorFlag == 1) {
        switch (event.key) {
            case '1' : display.textContent += '1'; operand2 = operand2*10 + 1; operatorFlag = 2; break;
            case '2' : display.textContent += '2'; operand2 = operand2*10 + 2; operatorFlag = 2; break;
            case '3' : display.textContent += '3'; operand2 = operand2*10 + 3; operatorFlag = 2; break;
            case '4' : display.textContent += '4'; operand2 = operand2*10 + 4; operatorFlag = 2; break;
            case '5' : display.textContent += '5'; operand2 = operand2*10 + 5; operatorFlag = 2; break;
            case '6' : display.textContent += '6'; operand2 = operand2*10 + 6; operatorFlag = 2; break;
            case '7' : display.textContent += '7'; operand2 = operand2*10 + 7; operatorFlag = 2; break;
            case '8' : display.textContent += '8'; operand2 = operand2*10 + 8; operatorFlag = 2; break;
            case '9' : display.textContent += '9'; operand2 = operand2*10 + 9; operatorFlag = 2; break;
            case '0' : display.textContent += '0'; operand2 = operand2*10 + 0; operatorFlag = 2; break;
            case '.' : {
                if (!dotFlag) {
                    display.textContent += '.';
                    dotFlag = 1;
                }
                break;
            };
            // case '_' : {
            //     if (!minusFlag) {
            //         display.textContent = `-${display.textContent}`;
            //         minusFlag = 1;
            //     }
            //     else {
            //         display.textContent = display.textContent.slice(1);
            //         minusFlag = 0;
            //     }
            //     operand2 = -operand2;
            //     break;
            // };
            case '+': display.textContent = ""; operator = '+'; operatorFlag = 1; break;
            case '-': display.textContent = ""; operator = '-'; operatorFlag = 1; break;
            case '*': display.textContent = ""; operator = '*'; operatorFlag = 1; break;
            case '/': display.textContent = ""; operator = '/'; operatorFlag = 1; break;
        }
    }
    else if (operatorFlag == 2) {
        switch (event.key) {
            case '1' : display.textContent += '1'; operand2 = operand2*10 + 1; operatorFlag = 2; break;
            case '2' : display.textContent += '2'; operand2 = operand2*10 + 2; operatorFlag = 2; break;
            case '3' : display.textContent += '3'; operand2 = operand2*10 + 3; operatorFlag = 2; break;
            case '4' : display.textContent += '4'; operand2 = operand2*10 + 4; operatorFlag = 2; break;
            case '5' : display.textContent += '5'; operand2 = operand2*10 + 5; operatorFlag = 2; break;
            case '6' : display.textContent += '6'; operand2 = operand2*10 + 6; operatorFlag = 2; break;
            case '7' : display.textContent += '7'; operand2 = operand2*10 + 7; operatorFlag = 2; break;
            case '8' : display.textContent += '8'; operand2 = operand2*10 + 8; operatorFlag = 2; break;
            case '9' : display.textContent += '9'; operand2 = operand2*10 + 9; operatorFlag = 2; break;
            case '0' : display.textContent += '0'; operand2 = operand2*10 + 0; operatorFlag = 2; break;
            case '.' : {
                if (!dotFlag) {
                    display.textContent += '.';
                    dotFlag = 1;
                }
                break;
            };
            // case '_' : {
            //     if (!minusFlag) {
            //         display.textContent = `-${display.textContent}`;
            //         minusFlag = 1;
            //     }
            //     else {
            //         display.textContent = display.textContent.slice(1);
            //         minusFlag = 0;
            //     }
            //     operand2 = -operand2;
            //     break;
            // };
            case '+': {
                operand1 = operate(operand1, operator, operand2); display.textContent = operand1; operator = '+'; 
                operatorFlag = 1; break;
            }
            case '-': {
                operand1 = operate(operand1, operator, operand2); display.textContent = operand1; operator = '-'; 
                operatorFlag = 1; break;
            }
            case '*': {
                operand1 = operate(operand1, operator, operand2); display.textContent = operand1; operator = '*'; 
                operatorFlag = 1; break;
            }
            case '/': {
                operand1 = operate(operand1, operator, operand2); display.textContent = operand1; operator = '/'; 
                operatorFlag = 1; break;
            }
            case 'Enter': {
                operand1 = operate(operand1, operator, operand2); display.textContent = operand1; 
                operatorFlag = 0; operand2 = 0; break;
            }
        }
    }
});