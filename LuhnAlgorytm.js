let number = 378282246310005;
let numberToString = number.toString();
 let numberLength = numberToString.length;
let lastNumber = numberToString[numberLength - 1];
let counter = 0;
let x = 0;
let potentialLastNumber;
// let cardNumbertoString = number.toString();
let firstDouble = numberToString.slice(0, 2);
let firstNumber = numberToString[0];

let numberOfDigit = numberToString.length;

for (let i = 1; i < numberLength; i++){
    if (i % 2 === 0){
        x = numberToString[numberLength - 1 - i] * 1
    } else {
        x = numberToString[numberLength - 1 - i] * 2
    }
if( x > 9){
    x = x.toString();
    x = 1 + (x % 10);
}
    counter = counter + x;
}
let modulo = counter % 10;
if (modulo != 0){
    potentialLastNumber = 10 - modulo;
}
if(potentialLastNumber = lastNumber){
    if (numberOfDigit == 15 && (firstDouble == 34 || firstDouble == 37)){
        console.log("American Express Credit Card" );
        }
    
    else if ( numberOfDigit == 16  && (firstDouble == 51 || firstDouble == 52 || firstDouble == 53 || firstDouble == 54 || firstDouble == 55)){
        console.log("MasterCard Credit Card");
    }
    
    else if ((numberOfDigit == 13 || numberOfDigit == 16) && firstNumber == 4){
        console.log("Visa Credit Card");
    } else {
        console.log ("This is not a Credit Card Number");
    }
}
