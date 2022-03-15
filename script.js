const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const multiply = function(num1, num2) {
    return num1*num2;
};

const divide = function(num1, num2) {
    return num1/num2;
}

const operate = function(num1, num2, func) {
    return Math.floor(func(num1, num2));
}


// try to get all buttons clickable
const buttons = Array.from(document.querySelectorAll('.button'));

// const returnButtonText = function(button){
//     console.log("hello")
// }
operatorsArray = ['+','-','÷','*']

firstButtonPressed = null
secondButtonPressed = null
thirdButtonPressed = null

operatorFlag = false


let splitArray = []
let operatorVar = ''
let valuesString = ''
let finalStringToCalc = ''
previousAnswer = 0
buttons.forEach(button => button.onclick = function(){
    
    if (button.innerHtml !== '='){
        valuesString += button.innerHTML
        stringToCalc = valuesString.slice(0, -1)
    }
   
    if (operatorsArray.includes(button.innerHTML)){
        operatorVar = button.innerHTML
    }

    if(button.innerHTML === '='){
        finalStringToCalc = stringToCalc.split(operatorVar)
        // console.log(stringToCalc)
       if(operatorVar === '+'){
           func = add
       }
       else if(operatorVar === '-'){
        func = subtract
        }
        else if(operatorVar === '*'){
            func = multiply
        }
        else if(operatorVar === '÷'){
            func = divide
        }
        console.log(finalStringToCalc[0])
        console.log(finalStringToCalc[1])
        console.log(func)
        previousAnswer = operate(parseInt(finalStringToCalc[0]), parseInt(finalStringToCalc[1]), func)
        splitArray = []
        operatorVar = ''
        valuesString = ''
        finalStringToCalc = ''
    }
    // update screen content here from interative variabel
    console.log(`this is previous answer${previousAnswer}`)
});




// const gridGoesHere = document.querySelector('.middle');
// console.log(gridGoesHere)
// document.getElementById('add').onclick = function() {
//     console.log("hello")
// }

