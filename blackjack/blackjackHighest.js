function blackjackHighest(strArr) {
  const cardObj = {
    // val: value, prio: priority
    ace: { val: 1, prio: 1 },
    two: { val: 2, prio: 2 },
    three: { val: 3, prio: 3 },
    four: { val: 4, prio: 4 },
    five: { val: 5, prio: 5 },
    six: { val: 6, prio: 6 },
    seven: { val: 7, prio: 7 },
    eight: { val: 8, prio: 8 },
    nine: { val: 9, prio: 9 },
    ten: { val: 10, prio: 10 },
    jack: { val: 10, prio: 11 },
    queen: { val: 10, prio: 12 },
    king: { val: 10, prio: 13 },
  };

  let highest = 'ace';
  let sum = strArr.reduce((prev, card) => {
    if (cardObj[highest].prio < cardObj[card].prio) highest = card;
    return prev + cardObj[card].val;
  }, 0);

  if (sum < 12 && strArr.includes('ace')) {
    sum += 10;
    highest = 'ace';
  }
  let res;
  if (sum < 21) res = 'below ';
  else if (21 < sum) res = 'above ';
  else res = 'blackjack ';

  return res + highest;
}

module.exports = blackjackHighest;
