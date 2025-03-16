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
const secDisplay = document.querySelector(".sec-display");

let operand1 = 0, operand2 = 0, operator = '';

let result = 0;
let dotFlag = 0;
let stateFlag = 0;

/* stateFlag marks the current state of the calculator, there are 6 total states : 0, 1, 2, 3, 4, 5

0 - initial state, no number or operator has been entered. Here if a number is entered we go to state 1, if an operator is 
entered it is neglected. main display and side display show nothing in this state.

1 - a number has been entered (operand 1), here main display shows the number. side display shows nothing. if an operator is 
entered here we go to state 2.

2 - an operator has been entered. here main display shows operand 1. side display shows the number and the current operator. here 
if another number is entered we go to state 3. if another operand is entered, we stay in same state only current operator is 
updated.

3 - another number (operand 2) has been entered. from here we can go to 2 different states : 1 and 4. If here an operator is 
entered we go to state 2. The result is displayed in the main display and stored as operand 1 and the operator which was entered 
is stored as current operator. If however, equals is entered, then we go to state 4.

4 - equals was entered from state 3. Here the display shows the result and the side display shows the entire equation. From here
if an operator is entered we go to state 2. But if an operand is entered we go to state 1.

5 - we enter this state when an error occurs. from here if an operator is entered, we stay in same state. But if an operand is 
entered we go to state 1.

if at any point, clear or Delete is entered, we go to state 0.
if at any point, we encounter a mathematical error, we go to state 5
 */

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
            case 'plus': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '+'})); break;
            case 'subtract': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '-'})); break;
            case 'multiply': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '*'})); break;
            case 'divide': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : '/'}));  break;
            case 'equals': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Enter'}));  break;
            case 'clear': document.dispatchEvent(new KeyboardEvent('keydown', {'key' : 'Delete'})); break;
        }
    })
})


//keydown is used instead of keypress, because backspace and delete are not fired in keypress

document.addEventListener('keydown', (event) => {  
    if (event.key == 'Delete') {
        result = operand1 = operand2 = stateFlag = 0;
        operator = '';
        updateDisplay();
    }
    else if (stateFlag == 0) {
        switch (event.key) {
            case '1' : operand1 = 1; ++stateFlag; break;
            case '2' : operand1 = 2; ++stateFlag; break;
            case '3' : operand1 = 3; ++stateFlag; break;
            case '4' : operand1 = 4; ++stateFlag; break;
            case '5' : operand1 = 5; ++stateFlag; break;
            case '6' : operand1 = 6; ++stateFlag; break;
            case '7' : operand1 = 7; ++stateFlag; break;
            case '8' : operand1 = 8; ++stateFlag; break;
            case '9' : operand1 = 9; ++stateFlag; break;
            case '0' : operand1 = 0; ++stateFlag; break;
        };
        updateDisplay();
    }
    else if (stateFlag == 1) {
        switch (event.key) {
            case '1' : operand1 = operand1*10 + 1; break;
            case '2' : operand1 = operand1*10 + 2; break;
            case '3' : operand1 = operand1*10 + 3; break;
            case '4' : operand1 = operand1*10 + 4; break;
            case '5' : operand1 = operand1*10 + 5; break;
            case '6' : operand1 = operand1*10 + 6; break;
            case '7' : operand1 = operand1*10 + 7; break;
            case '8' : operand1 = operand1*10 + 8; break;
            case '9' : operand1 = operand1*10 + 9; break;
            case '0' : operand1 = operand1*10 + 0; break;
            case '+': 
            case '-': 
            case '*': 
            case '/': operator = event.key; stateFlag = 2; break;
        }
        updateDisplay();
    }
    else if (stateFlag == 2) {
        switch (event.key) {
            case '1': operand2 = 1; ++stateFlag; break;
            case '2': operand2 = 2; ++stateFlag; break;
            case '3': operand2 = 3; ++stateFlag; break;
            case '4': operand2 = 4; ++stateFlag; break;
            case '5': operand2 = 5; ++stateFlag; break;
            case '6': operand2 = 6; ++stateFlag; break;
            case '7': operand2 = 7; ++stateFlag; break;
            case '8': operand2 = 8; ++stateFlag; break;
            case '9': operand2 = 9; ++stateFlag; break;
            case '0': operand2 = 0; ++stateFlag; break;
            case '+': 
            case '-': 
            case '*': 
            case '/': operator = event.key; break;
        }
        updateDisplay();
    }
    else if (stateFlag == 3) {
        switch (event.key) {
            case '1': operand2 = operand2*10 + 1; break;
            case '2': operand2 = operand2*10 + 2; break;
            case '3': operand2 = operand2*10 + 3; break;
            case '4': operand2 = operand2*10 + 4; break;
            case '5': operand2 = operand2*10 + 5; break;
            case '6': operand2 = operand2*10 + 6; break;
            case '7': operand2 = operand2*10 + 7; break;
            case '8': operand2 = operand2*10 + 8; break;
            case '9': operand2 = operand2*10 + 9; break;
            case '0': operand2 = operand2*10 + 0; break;
            case '+': 
            case '-': 
            case '*': 
            case '/': operand1 = operate(operand1, operator, operand2); stateFlag = 2; operator = event.key; operand2 = 0; break;
            case 'Enter': result = operate(operand1, operator, operand2); ++stateFlag; break;
        }
        updateDisplay();
    }
    else if (stateFlag == 4) {
        switch (event.key) {
            case '1': operand1 = 1; stateFlag = 1; break;
            case '2': operand1 = 2; stateFlag = 1; break;
            case '3': operand1 = 3; stateFlag = 1; break;
            case '4': operand1 = 4; stateFlag = 1; break;
            case '5': operand1 = 5; stateFlag = 1; break;
            case '6': operand1 = 6; stateFlag = 1; break;
            case '7': operand1 = 7; stateFlag = 1; break;
            case '8': operand1 = 8; stateFlag = 1; break;
            case '9': operand1 = 9; stateFlag = 1; break;
            case '0': operand1 = 0; stateFlag = 1; break;
            case '+': 
            case '-': 
            case '*': 
            case '/': operand1 = result; operator = event.key; stateFlag = 2; break;
        }
        updateDisplay();
    }
    else if (stateFlag == 5) {
        switch (event.key) {
            case '1': operand1 = 1; stateFlag = 1; result = 0; break;
            case '2': operand1 = 2; stateFlag = 1; result = 0; break;
            case '3': operand1 = 3; stateFlag = 1; result = 0; break;
            case '4': operand1 = 4; stateFlag = 1; result = 0; break;
            case '5': operand1 = 5; stateFlag = 1; result = 0; break;
            case '6': operand1 = 6; stateFlag = 1; result = 0; break;
            case '7': operand1 = 7; stateFlag = 1; result = 0; break;
            case '8': operand1 = 8; stateFlag = 1; result = 0; break;
            case '9': operand1 = 9; stateFlag = 1; result = 0; break;
            case '0': operand1 = 0; stateFlag = 1; result = 0; break;
        }
        updateDisplay();
    }
});

function updateDisplay () {
    if (operand1 == Infinity || operand1 == undefined || result == Infinity || result == undefined) {
        display.textContent = "ERROR";
        secDisplay.textContent = "";
        stateFlag = 5;
    }
    else {
        switch (stateFlag) {
            case 0: display.textContent = ""; secDisplay.textContent = ""; break;
            case 1: display.textContent = operand1; secDisplay.textContent = ""; break;
            case 2: display.textContent = operand1; secDisplay.textContent = `${operand1} ${operator}`; break;
            case 3: display.textContent = operand2; secDisplay.textContent = `${operand1} ${operator}`; break;
            case 4: display.textContent = result; secDisplay.textContent = `${operand1} ${operator} ${operand2} =`; break;
        }
    }
}