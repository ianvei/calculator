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
    // return Math.floor(func(num1, num2));
   return Math.round((func(num1, num2) + Number.EPSILON) * 100) / 100;
}

const buttons = Array.from(document.querySelectorAll('.button'));

operatorsArray = ['+','-','÷','*'];

firstButtonPressed = null;
secondButtonPressed = null;
thirdButtonPressed = null;

operatorFlag = false;


let splitArray = [];
let operatorVar = '';
let valuesString = '';
let finalStringToCalc = '';
previousAnswer = 0;
secondHalfFlag = false
secondHalfStringTemp = []

const mainScreen = document.querySelector('.screen-number');
const previousScreen = document.querySelector('.number-storage');
buttons.forEach(button => button.onclick = function(){
    if (button.innerHtml !== '=' && button.innerHTML !== 'C'){
        valuesString += button.innerHTML; 
        if (!operatorsArray.includes(button.innerHTML)){
            mainScreen.textContent = valuesString; //
            if(secondHalfFlag){
                secondHalfStringTemp += button.innerHTML
                // finalStringToCalc = stringToCalc.split(operatorVar)
                mainScreen.textContent = secondHalfStringTemp
            }
        }
        stringToCalc = valuesString.slice(0, -1)
    }
    if (operatorsArray.includes(button.innerHTML)){
        operatorVar = button.innerHTML
        mainScreen.textContent = '';
        if(previousAnswer){
            previousScreen.textContent = previousAnswer+valuesString
        }
        else if (!previousAnswer){
            previousScreen.textContent = valuesString
        }
        secondHalfFlag = true
    }

    // if (secondHalfFlag && previousAnswer){
    //         valuesString += button.innerHTML
    //         // mainScreen.textContent = '';
    //         previousScreen.textContent = valuesString
    //         // secondHalfFlag = true
    // }

    if(button.innerHTML === '='){
        finalStringToCalc = stringToCalc.split(operatorVar)
        previousScreen.textContent = stringToCalc;
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
        if(previousAnswer){
            newAnswer = operate(parseInt(previousAnswer), parseInt(finalStringToCalc[1]), func)
            mainScreen.textContent = newAnswer;
            previousAnswer = newAnswer
        }
        else if (!previousAnswer){
            previousAnswer = operate(parseInt(finalStringToCalc[0]), parseInt(finalStringToCalc[1]), func)
            mainScreen.textContent = previousAnswer;
        }
        // else if(newAnswer){
        //     newAnswer = operate(parseInt(newAnswer), parseInt(finalStringToCalc[1]), func)
        //     mainScreen.textContent = newAnswer;
        // }
        splitArray = []
        operatorVar = ''
        valuesString = ''
        finalStringToCalc = ''
        secondHalfStringTemp = []
    }
    if(button.innerHTML === 'C'){
        console.log("I am clearing")
        splitArray = []
        operatorVar = ''
        valuesString = ''
        finalStringToCalc = ''
        previousAnswer = 0;
        newAnswer = 0;
        secondHalfStringTemp = []
        mainScreen.textContent = ''
        previousScreen.textContent = ''
        secondHalfFlag = false
    }
    // update screen content here from interative variabel
    console.log(`this is previous answer${previousAnswer}`)
    
});




// const gridGoesHere = document.querySelector('.middle');
// console.log(gridGoesHere)
// document.getElementById('add').onclick = function() {
//     console.log("hello")
// }

