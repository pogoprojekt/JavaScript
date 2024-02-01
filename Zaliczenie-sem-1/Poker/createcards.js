const suits = ["Pik", "Kier", "Karo", "Trefl"];
const values = [
  "As",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Walet",
  "Dama",
  "Król",
];

let deck = [];

for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

console.log("Wylosowane karty");

for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} ${deck[i].Suit}`);
}
let limitedArray = deck.slice(0, 5);

module.exports = {
  limitedArray,
};
