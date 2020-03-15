const operate = (a, b, operation) => {
    if (operation === ' + ') {
        return a + b;
    } else if (operation === ' - ') {
        return a - b;
    } else if (operation === ' * ') {
        return a * b;
    } else {
        return a / b;
    }
};

//var p = document.querySelector('p');
//var currentNum = '';
//var num1;
//var num2;
//var operation = '';
//var operators = document.querySelectorAll('.operator');
//operators.forEach(function(operator){
//    operator.addEventListener('click', function(){
//        if (!operation === ''){
//            num2 = currentNum;
//            var a = parseFloat(num1);
//            var b = parseFloat(num2);
//            currentNum = operate(a, b, operation);
//        }
//        operation = operator.textContent;
//        num1 = currentNum;
//        currentNum = '';
//        p.textContent += operator.textContent;
//    });
//})
//var numbers = document.querySelectorAll('.numbers');
//numbers.forEach(function(number){
//    number.addEventListener('click', function(){
//        currentNum += number.textContent;
//        p.textContent += number.textContent;
//    });
//});
//var equals = document.querySelector('#equals');
//equals.addEventListener('click', function(){
//    num2 = currentNum;
//    var a = parseFloat(num1);
//    var b = parseFloat(num2);
//    if (b === 0 && operation === ' / ') {
//        p.textContent = 'ERROR';
//    } else {
//        p.textContent = operate(a, b, operation);
//        currentNum = p.textContent;
//        operation = '';
//    }
//});
//var clear = document.querySelector('#clear');
//clear.addEventListener('click', function(){
//    p.textContent = '';
//    currentNum = '';
//    operation = '';
//});
//var backspace = document.querySelector('#backspace');
//backspace.addEventListener('click', function(){
//    
//});