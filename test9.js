'use strict';
const shape_array = ['spade', 'heart', 'diamond', 'club', 'joker'];
const trump_deck = (shapeArray) => {
<<<<<<< HEAD
    let trumps = {};
    let value = [];
    // new trumps.shape_array[0] = 1;
    // for (let i = 0; i < 15; i++) {
    //   value.push(String(i));
    //   value[0] === '1'
    //     ? value.splice(0, 1, 'A')
    //     : value[10] === '11'
    //     ? value.splice(10, 1, 'J')
    //     : value[11] === '12'
    //     ? value.splice(11, 1, 'Q')
    //     : value[12] === '13'
    //     ? value.splice(12, 1, 'K')
    //     : value[13] === '14'
    //     ? value.splice(13, 1, 'RED')
    //     : value[14] === '15'
    //     ? value.splice(14, 1, 'BLACK')
    //     : null;
    // }
    // for (let i = 0; i < shapeArray.length; i++) {
    //   trumps.shapeArray[i] = 1;
    // }
    console.log(trumps);
    return '';
=======
  let trumps = {};
  let value = [];
  console.log(trumps);
  for (let i = 1; i < 14; i++) {
    value.push([i, i]);
  }
  value[0][0] === 1 ? value[0].splice(0, 1, 'A') : null;
  value[10][0] === 11 ? value[10].splice(0, 1, 'J') : null;
  value[11][0] === 12 ? value[11].splice(0, 1, 'Q') : null;
  value[12][0] === 13 ? value[12].splice(0, 1, 'K') : null;
  let objs = {};
  let joker = {
    RED: 1,
    BLACK: 2,
  };
  value.forEach((value) => {
    objs[value[0]] = value[1];
  });
  let counts = 0;
  for (let i = 0; i < shapeArray.length; i++) {
    trumps[shapeArray[i]] = { ...objs };
    if (shapeArray[i] === 'joker') {
      trumps[shapeArray[i]] = { ...joker };
    }
    counts += Object.keys(trumps[shapeArray[i]]).length;
  }
  return `해당 리턴된 객체의 카드 갯수에 대한 검사결과, 총 ${counts}개로 정상적인 구성입니다.`;
>>>>>>> fea881b807302e94af5d79edc372866ecdfcd642
};
console.log(trump_deck(shape_array));
