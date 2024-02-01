function areCardsExactlyInOrder(cardArray, valuesOrder) {
  for (let i = 1; i < cardArray.length; i++) {
    let currentCard = cardArray[i];
    let previousCard = cardArray[i - 1];

    let currentIndex = valuesOrder.indexOf(currentCard.Value);
    let previousIndex = valuesOrder.indexOf(previousCard.Value);

    if (currentIndex !== previousIndex + 1) {
      return false;
    }
  }
  return true;
}

function areCardsHaveSameColor(cardArray) {
  let firstColor = cardArray[0].Suit;

  for (let i = 1; i < cardArray.length; i++) {
    if (cardArray[i].Suit !== firstColor) {
      return false;
    }
  }

  return true;
}

module.exports = {
  areCardsExactlyInOrder,
  areCardsHaveSameColor,
};
