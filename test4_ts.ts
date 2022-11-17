interface iLikeMoney {
  (paymoney: number, cost: number): object;
}
type objects = {
  [key: string]: number;
};
const change_money: iLikeMoney = (paymoney, cost) => {
  let changes: objects = {};
  let change: number = paymoney - cost;
  let arr: (number | string)[][] = [
    [50000, '오만원권'],
    [10000, '만원권'],
    [500, '오백원동전'],
    [100, '일백원동전'],
    [50, '오십원동전'],
    [10, '십원동전'],
  ];

  arr.forEach((value: any) => {
    if (change / value[0] >= 0) {
      changes[value[1]] = Math.floor(change / value[0]);
      change = change % value[0];
    }
  });

  return changes;
};
