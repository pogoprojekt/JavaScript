let cardNumber = 4374567888812345678;
let cardNumbertoString = cardNumber.toString();
let firstDouble = cardNumbertoString.slice(0, 2);
let firstNumber = cardNumbertoString[0];

let numberOfDigit = cardNumbertoString.length;

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