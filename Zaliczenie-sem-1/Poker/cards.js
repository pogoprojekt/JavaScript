const { limitedArray } = require("./createcards");
const { areCardsExactlyInOrder } = require("./orderandcolor");

const { checkisFourThreeorPair, potentialPoker } = require("./pokerorder");

const cardsOrder = [
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
  "As",
];
const straightFiveOrder = ["2", "3", "4", "5", "As"];
const flushOrder = ["10", "Walet", "Dama", "Król", "As"];

// Funkcja porównująca obiekty po polu "Value" z wykorzystaniem hierarchii wartości cardsOrder
function compareCards(card1, card2) {
  let index1 = cardsOrder.indexOf(card1.Value);
  let index2 = cardsOrder.indexOf(card2.Value);

  return index1 - index2;
}

limitedArray.sort(compareCards);
// limitedArray=[
//     { Value: '2', Suit: 'Spades' },
//     { Value: '3', Suit: 'Diamonds' },
//     { Value: '4', Suit: 'Spades' },
//     { Value: '6', Suit: 'Spades' },
//     { Value: '7', Suit: 'Spades' }
//   ];
console.log(limitedArray);

if (
  areCardsExactlyInOrder(limitedArray, straightFiveOrder) ||
  areCardsExactlyInOrder(limitedArray, cardsOrder)
) {
  potentialPoker(limitedArray);
} else {
  checkisFourThreeorPair(limitedArray);
}
