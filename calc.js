


let display = '';
let action = '';
let lastValue = 0;
let sideValue = 0;
let hitEnter = false;



for (let i = 0; i< 10; i++){
    const buttonAssign = document.getElementById(`button${i}`);
    buttonAssign.addEventListener('click',function(){
        valueInput(buttonAssign.innerHTML);
    });
}

const addAssign = document.getElementById('buttonAdd');
addAssign.addEventListener('click', function(){
   if (hitEnter == false) {
    calculate();
    display = '';
    document.getElementById('display').innerHTML = lastValue;
   }
   action = '+';
    
})

const subtractAssign = document.getElementById('buttonSubtract');
subtractAssign.addEventListener('click', function(){
    if (hitEnter == false){
    calculate();   
    display = '';
    document.getElementById('display').innerHTML = lastValue;
    }
    action = '-';
})

const multiplyAssign = document.getElementById('buttonMultiply');
multiplyAssign.addEventListener('click', function(){
    if (hitEnter == false){
        calculate();   
        display = '';
        document.getElementById('display').innerHTML = lastValue;
        }
        action = '*';
})

const divideAssign = document.getElementById('buttonDivide');
divideAssign.addEventListener('click', function(){
    if (hitEnter == false){
        calculate();   
        display = '';
        document.getElementById('display').innerHTML = lastValue;
        }
        action = '/';
})

const plusMinusAssign = document.getElementById('buttonPlusMinus');
plusMinusAssign.addEventListener('click', function(){
    if (display.charAt(0) == '-'){
        display = display.slice(1);
    }
    else{
        display = '-' + display;
    }
    document.getElementById('display').innerHTML = display;
})

const periodAssign = document.getElementById('buttonPeriod');
periodAssign.addEventListener('click', function(){
    display = display + '.';
    document.getElementById('display').innerHTML = display;
})

const equalsAssign = document.getElementById('buttonEquals');
equalsAssign.addEventListener('click', function(){
    calculate();
    sideValue = display;
    display = '';
    document.getElementById('display').innerHTML = lastValue;
    hitEnter = true;
})

const clearAssign = document.getElementById('buttonClear');
clearAssign.addEventListener('click', function(){
    display = '';
    document.getElementById('display').innerHTML = display;
})

const clearEverythingAssign = document.getElementById('buttonClearEverything');
clearEverythingAssign.addEventListener('click', function(){
    display = '';
    action = '';
    lastValue = 0;
    document.getElementById('display').innerHTML = display;
})

function valueInput(x){
    if(hitEnter == true){
        hitEnter = false;
    }
    display = display + x;
    document.getElementById('display').innerHTML = display;
}

function calculate(){
    if(hitEnter == true){
        display = sideValue;
    }
    if(action == ''){
        lastValue = display;
    }
    else if(action == '+'){
        lastValue = +lastValue + +display; 
    }
    else if(action == '-'){
        lastValue = +lastValue - +display; 
    }
    else if(action == '*'){
        lastValue = +lastValue * +display; 
    }
    else{
        lastValue = +lastValue / +display; 
    }
}