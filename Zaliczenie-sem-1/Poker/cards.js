const { limitedCardsToFive } = require("./createcards");
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
  const index1 = cardsOrder.indexOf(card1.Value);
  const index2 = cardsOrder.indexOf(card2.Value);

  return index1 - index2;
}

limitedCardsToFive.sort(compareCards);
// limitedArray=[
//     { Value: '2', Suit: 'Spades' },
//     { Value: '3', Suit: 'Diamonds' },
//     { Value: '4', Suit: 'Spades' },
//     { Value: '6', Suit: 'Spades' },
//     { Value: '7', Suit: 'Spades' }
//   ];
console.log(limitedCardsToFive);

if (
  areCardsExactlyInOrder(limitedCardsToFive, straightFiveOrder) ||
  areCardsExactlyInOrder(limitedCardsToFive, cardsOrder)
) {
  potentialPoker(limitedCardsToFive);
} else {
  checkisFourThreeorPair(limitedCardsToFive);
}
