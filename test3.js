let coins = {
  silvers: (leather * 2),
  golds: (leather * 2) / 4,
  coppers: (((leather * 2) / 4) % 1) * 32,
  onehour: ((leather * 2) / 4) / 8,
  onehourcopper: ((((leather * 2) / 4) / 8) % 1) * 32
}

const game_money = (leather) => {
  if (typeof leather === 'number') {

    console.log(coins.coppers)

    // return `이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${Math.floor(onehour)}개 입니다.
    // gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${onehourcopper}개의 copper를 챙겼습니다.
    // 공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${Math.floor(golds)}gold, ${coppers}copper를 얻었습니다
    // `
  }
}
console.log(game_money(45));
