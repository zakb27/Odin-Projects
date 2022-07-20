const add = (x,y)=> (x+y);
const minus = (x,y)=> (x-y);
const divide =(x,y) =>(x/y);
const multiply = (x,y)=>(x*y);


const operate = ((operator,x,y)=>{
    switch(operator){
        case('+'):
            return add(x,y);
        case '-':
            return minus(x,y);
        case '/':
            if(y===0){
                return 'infinity';
            }
            return divide(x,y);
        case '*':
            return multiply(x,y);
    }
    operator(x,y);
});
const init = (()=>{
    const getDisplay = document.querySelector('#current_num');
    getDisplay.textContent='ENTER';
});

const addDisplay = ((display_score) => {

    if (getDisplay.textContent ==0 || getDisplay.textContent==='ENTER'){
        clear();
    }
    getDisplay.textContent += display_score;
});

const setSecondDisplay = ((operator='')=>{
    getDisplay2.textContent = firstNumber.toString() + operator;
});


const clear = ()=> getDisplay.textContent = '';

let firstNumber =null;
let currentOperator;

const getDisplay = document.querySelector('#current_num');
const getDisplay2 = document.querySelector('#second_num');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
numbers.forEach((btn)=>{
    btn.addEventListener('click', () => {
        addDisplay(btn.id);
    });
});

operators.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        if(firstNumber){
            firstNumber= operate(currentOperator,firstNumber,getDisplay.textContent);
            currentOperator = btn.id;
            setSecondDisplay(currentOperator);
            clear();
        }
        else{
            firstNumber = getDisplay.textContent;
            currentOperator = btn.id;
            setSecondDisplay(currentOperator);
            clear();
        }

    });
});

equal.addEventListener('click',()=>{
    getDisplay.textContent = operate(currentOperator,firstNumber,getDisplay.textContent);
    firstNumber='';
    setSecondDisplay();
})


init();

console.log(operate('-',5,10));