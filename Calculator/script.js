let display = document.getElementById("display");

function displayValue(input){
        display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value="Err";
    }
} 


function removeDigit(){
    display.value = display.value.slice(0, -1);
}

window.onload = function(){
    display.value="";
    
}
