const arrayOfBalls = createArray(8);

console.log("Kule: " + arrayOfBalls);
const leftSideOfArray = arrayOfBalls.splice(0,3);
const rightSideOfArray = arrayOfBalls.splice(0,3);

function createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
        newArr.push(1);
    }
    newArr[Math.floor(Math.random() * 8)] = 2;

    return newArr
}

function sumOfElements(array){
    let sums = 0;
      for(let i = 0; i < array.length; i++){
    
      sums += array[i];
    }
    return sums;
}

function theHeaviestOfThreeElements(array, indexOfMove){
    if (array[0] === array[1]){
        console.log("Kula z pozycji " + (3 + indexOfMove)  + " jest najcięższa")}
        else if (array[0] > array[1]){
            console.log("Kula z pozycji " + (1 + indexOfMove)  + " jest najcięższa")
        }
        else console.log("Kula z pozycji " + (2 + indexOfMove)  + " jest najcięższa")
}

if (sumOfElements(leftSideOfArray) === sumOfElements(rightSideOfArray)){
    if (arrayOfBalls[0] > arrayOfBalls[1]){
    console.log("Kula z pozycji 7 jest najcięższa")}
    else console.log("Kula z pozycji 8 jest najcięższa")
}
else if (sumOfElements(leftSideOfArray) > sumOfElements(rightSideOfArray)){
    theHeaviestOfThreeElements(leftSideOfArray, 0)

}else {
    theHeaviestOfThreeElements(rightSideOfArray, 3)
    }
