


let display = '';
let action = '';
let lastValue = '';
let sideValue = '';
let hitEnter = false;
let hitPeriod = false;



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
    plusMinus();
})

const periodAssign = document.getElementById('buttonPeriod');
periodAssign.addEventListener('click', function(){
    display = display + '.';
    document.getElementById('displayBottom').innerHTML = display;
    hitPeriod = true;
})

const equalsAssign = document.getElementById('buttonEquals');
equalsAssign.addEventListener('click', function(){
    onHitEnter();
})

const clearAssign = document.getElementById('buttonClear');
clearAssign.addEventListener('click', function(){
    clearCurrent();
})

const clearEverythingAssign = document.getElementById('buttonClearEverything');
clearEverythingAssign.addEventListener('click', function(){
    clearEverything();
});

function clearCurrent(){
    display = '';
    document.getElementById('displayBottom').innerHTML = display;
}

function clearEverything()  
{
    display = '';
    action = '';
    lastValue = '';
    document.getElementById('displayBottom').innerHTML = '';
    document.getElementById('displayTopRight').innerHTML = '';
    document.getElementById('displayTopLeft').innerHTML = '';
}

function valueInput(x){
    if(hitEnter == true){
        clearEverything();
        hitEnter = false;
    }
    if((display.length < 9)&& (!(x == 0 && display == '0'))){
    display = display + x;
    document.getElementById('displayBottom').innerHTML = display;
    }
}

function operationChoice(x){
    if (hitEnter == false){
        calculate();   
        display = '';
        }
        action = x;
        document.getElementById('displayTopRight').innerHTML = action;
        hitEnter = false; 
}

function onHitEnter(){
    if(lastValue != 'Error'){
        calculate();
        sideValue = display;
        display = '';
        document.getElementById('displayBottom').innerHTML = lastValue;
        document.getElementById('displayTopRight').innerHTML = '';
        document.getElementById('displayTopLeft').innerHTML = '';
        hitEnter = true;
        }
}

function plusMinus(){
    if (display.charAt(0) == '-'){
        display = display.slice(1);
    }
    else{
        display = '-' + display;
    }
    document.getElementById('displayBottom').innerHTML = display;
}

function calculate(){
    if((display === '0')&&(action == '/')){
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
        lastValue = roundIt(lastValue);
        }
        else if(action == '+'){
        lastValue = +lastValue + +display;
        lastValue = roundIt(lastValue); 
        }
        else if(action == '-'){
        lastValue = +lastValue - +display;
        lastValue = roundIt(lastValue); 
        }
        else if((action == 'x')&&(display != '')){
        lastValue = +lastValue * +display; 
        lastValue = roundIt(lastValue);
        }
        else if((display != '')&& (lastValue !== 0))
        {
        lastValue = +lastValue / +display;
        lastValue = roundIt(lastValue); 
        }
        let lengthCheck = lastValue.toString(10);
        if(lengthCheck.length > 10){
            clearEverything();
            lastValue = 'Error';
        }
        document.getElementById('displayTopLeft').innerHTML = lastValue;
    }
    
}

function roundIt(x){
    return(Math.round(x*100)/100);
}

function oopsy(x)
{
    clearEverything();
    lastValue = x;
}

document.addEventListener('keyup', function(e){
    keyboardInput(e.key);
});

document.addEventListener('keydown', function(e){
    if(e.key == '/'){
        e.preventDefault();
        keyboardInput(e.key);
    }
})

function keyboardInput(x){
    if((x >= 0 && x <= 9 ) || (x == '.'))
    {
        valueInput(x);
    }
    else if((x == '/') || (x == 'x') || (x == '-') || (x == '+'))
    {
        operationChoice(x);
    }
    else if(x == 'Enter')
    {
        onHitEnter();
    }
    else if(x == 'Delete')
    {
        clearCurrent();
    }
    else if(x == 'n')
    {
        plusMinus();
    }
    else if(x == 'c')
    {
        clearEverything();
    }
}