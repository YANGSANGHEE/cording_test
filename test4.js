

const change_money = (paymoney, cost) => {
  let changes = {}
  let change = paymoney - cost
  let arr = [
    [50000, '오만원권'],
    [10000, '만원권'],
    [500, '오백원동전'],
    [100, '일백원동전'],
    [50, '오십원동전'],
    [10, '십원동전']
  ]
  arr.forEach((value) => {
    if (change / value[0] >= 0) {
      changes[value[1]] = Math.floor(change / value[0]);
      change = change % value[0];
    }
  });
  return changes;
}

change_money(100000, 34830)