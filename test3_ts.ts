interface game_moneys {
  (leather: number, gold: boolean, silver: boolean, copper: boolean): string;
}

const game_money: game_moneys = (leather, gold, silver, copper): string => {
  let silvers: number = silver ? leather * 2 : NaN;
  let golds: number = gold ? (leather * 2) / 4 : NaN;
  let coppers: number = copper ? (golds % 1) * 32 : NaN;
  let onehour: number = golds / 8;
  let onehourcopper: number = (onehour % 1) * 32;

  // console.log(silvers);

  return `이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${Math.floor(
    onehour
  )}개 입니다.
  gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${onehourcopper}개의 copper를 챙겼습니다.
  공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${Math.floor(
    golds
  )}gold, ${coppers}copper를 얻었습니다
  `;
};
console.log(game_money(45, true, false, true));
