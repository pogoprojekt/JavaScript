const {
  areCardsExactlyInOrder,
  areCardsHaveSameColor,
} = require("./orderandcolor");
const flushOrder = ["10", "Walet", "Dama", "Król", "As"];
function potentialPoker(cardArray) {
  if (areCardsHaveSameColor(cardArray)) {
    if (areCardsExactlyInOrder(cardArray, flushOrder)) {
      console.log("Got Royal Flush");
    } else console.log("Got Straight Flush");
  } else console.log("Got Straight");
}

function checkisFourThreeorPair(cardArray) {
  const valueOccurrences = {};

  for (let card of cardArray) {
    const value = card.Value;
    valueOccurrences[value] = (valueOccurrences[value] || 0) + 1;
  }
  console.log(valueOccurrences);

  let hasValueTwice = false;
  let hasValueThrice = false;
  let pairCount = 0;

  for (let value in valueOccurrences) {
    if (valueOccurrences[value] === 4) {
      console.log("Masz Four of a Kind");
    } else if (valueOccurrences[value] === 3) {
      hasValueThrice = true;
    } else if (valueOccurrences[value] === 2) {
      hasValueTwice = true;
      pairCount++;
    }
  }
  if (hasValueTwice && hasValueThrice) {
    console.log("Masz Full House");
  } else if (hasValueThrice) {
    console.log("Masz Three of a Kind");
  }

  else if (pairCount === 1) {
    console.log("Masz One Pair");
  } else if (pairCount === 2) {
    console.log("Masz Two Pair");
  } else if (pairCount === 0 && areCardsHaveSameColor(cardArray)) {
    console.log("Masz Flush");
  } else {
    console.log("Najwyższa karta to " + cardArray[4].Value);
  }
}

module.exports = {
  checkisFourThreeorPair,
  potentialPoker,
};
