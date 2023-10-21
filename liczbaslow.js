// count how many words it contains

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let newText = text.replaceAll(".",""); //zastępuje kropkę

let countText = text.split(" "); // dzieli tekst i tworzy array


console.log(countText.length); // zlicza liczbę elemntów w array


// próby coś z pętlą
// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// let newText = text.replaceAll(",", ""); //zastępuje kropkę
// newText = newText.replaceAll(".","");
// console.log(newText);


// count how many letter “A”  is in it

// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// let counter = 0;
// let newText = text
// .replaceAll(",","")
// .replaceAll(".","");
// let countText = newText.split(""); // dzieli tekst i tworzy array

// // console.log(newText); // dziwany arraj

// for (let i = 0; i<countText.length; i++){
//     if (countText[i] == "a" ){
//         counter = counter + 1;
//     }
// }
// console.log(counter);


//display longest word

// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// let newText = text
// .replaceAll(",","")
// .replaceAll(".","");
// let wordCounter
// let table = [];
// let firstWord = "";
// let countText = newText.split(" "); // dzieli tekst i tworzy array


// for ( let i = 0; i < countText.length - 1; i++){
//     if(countText[i].length > firstWord.length ){
        
//         firstWord = countText[i];
//     } 
    
// }
// wordCounter = firstWord.length;
//     for (let j = 0; j < countText.length; j++){
//         if(countText[j].length == wordCounter){
//             table.push(countText[j]) ;
//         }
//     }

// console.log(table);
// console.log(table.length)