


let display = '';
let action = '';
let lastValue = 0;
let sideValue = '';
let hitEnter = false;



for (let i = 0; i< 10; i++){
    const buttonAssign = document.getElementById(`button${i}`);
    buttonAssign.addEventListener('click',function(){
        valueInput(buttonAssign.innerHTML);
    });
}

const addAssign = document.getElementById('buttonAdd');
addAssign.addEventListener('click', function(){
   operationChoice('+')
})

const subtractAssign = document.getElementById('buttonSubtract');
subtractAssign.addEventListener('click', function(){
    operationChoice('-')
})

const multiplyAssign = document.getElementById('buttonMultiply');
multiplyAssign.addEventListener('click', function(){
        operationChoice('x')
})

const divideAssign = document.getElementById('buttonDivide');
divideAssign.addEventListener('click', function(){
        operationChoice('/')
})

const plusMinusAssign = document.getElementById('buttonPlusMinus');
plusMinusAssign.addEventListener('click', function(){
    if (display.charAt(0) == '-'){
        display = display.slice(1);
    }
    else{
        display = '-' + display;
    }
    document.getElementById('displayBottom').innerHTML = display;
})

const periodAssign = document.getElementById('buttonPeriod');
periodAssign.addEventListener('click', function(){
    display = display + '.';
    document.getElementById('displayBottom').innerHTML = display;
})

const equalsAssign = document.getElementById('buttonEquals');
equalsAssign.addEventListener('click', function(){
    calculate();
    sideValue = display;
    display = '';
    document.getElementById('displayBottom').innerHTML = lastValue;
    document.getElementById('displayTopRight').innerHTML = '';
    document.getElementById('displayTopLeft').innerHTML = '';
    hitEnter = true;
})

const clearAssign = document.getElementById('buttonClear');
clearAssign.addEventListener('click', function(){
    display = '';
    document.getElementById('displayBottom').innerHTML = display;
})

const clearEverythingAssign = document.getElementById('buttonClearEverything');
clearEverythingAssign.addEventListener('click', function(){
    clearEverything();
    document.getElementById('displayBottom').innerHTML = '';
    document.getElementById('displayTopRight').innerHTML = '';
    document.getElementById('displayTopLeft').innerHTML = '';
});

function clearEverything()  
{
    display = '';
    action = '';
    lastValue = 0;
    document.getElementById('displayBottom').innerHTML = display;
}

function valueInput(x){
    if(hitEnter == true){
        clearEverything();
        hitEnter = false;
    }
    display = display + x;
    document.getElementById('displayBottom').innerHTML = display;
    
}

function operationChoice(x){
    {
        if (hitEnter == false){
            calculate();   
            display = '';
            }
            action = x;
            document.getElementById('displayTopRight').innerHTML = action;
            hitEnter = false;
    }
}

function calculate(){
    if(display === '0'){
        oopsy('Divide by 0?');
    }
    else if(isNaN(lastValue) || isNaN(display) || document.getElementById('displayTopLeft').innerHTML == 'Infinity')
    {
        oopsy('Not a number.');
    }
    else{
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
        else if(action == 'x'){
        lastValue = +lastValue * +display; 
        }
        else if(display != '')
        {
        lastValue = +lastValue / +display; 
        }
        document.getElementById('displayTopLeft').innerHTML = lastValue;
    }
    
}

function oopsy(x)
{
    clearEverything();
    lastValue = x;
}