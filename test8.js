const bingo = () => {
  let bingoarr = []
  for (let i = 1; i < 5; i++) {
    let newArr = new Array(5)
    for (let j = 0; j < 10; j++) {
      let ranEle = Math.floor(Math.random() * 2)
      newArr[j] = ranEle
    }
    bingoarr.push(newArr)
  }
  //임의 랜덤 배열 생성
  // console.log(bingoarr)
  for (let i = 0; i < bingoarr.length; i++) {
    for (let j = 0; j < bingoarr[i].length; j++) {
      if (bingoarr[i][j] == 1) {
        bingoarr.splice(j, 0, 0)
      }
    }
  }
  console.log(bingoarr)
}

bingo()