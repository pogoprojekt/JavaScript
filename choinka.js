let base = 7;

let text = "";

for(let a = 0; a < base ; a++){ //start głównej pętli

for ( let i = 0; i < base-a; i++) //dodawanie spacji
{
    text = text + " ";
}
    
for (let j = 0; j < a; j++){ // dodawanie #
    
        text = text + "#";

    }

text = text + " "; // dadawanie spacji po # (srodek drzewa)

    for (let k = 0; k < a; k++){ // dodawania # po prawej stronie
    
        text = text + "#";

    }

console.log(text);
text = ""; //zerowanie tekstu


}