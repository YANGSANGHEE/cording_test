let arr = []
for (let i = 0; i < 2; i++) {
  arr.push(Math.floor(Math.random * 100));
}
function cone_volumes(radius, height) {
  let Pi = Math.PI;
  let Pow = Math.pow(radius, 2);
  return Math.floor((Pi * Pow * height) / 3);
}
console.log(cone_volume(arr[0], arr[1]));


function cone_volume() {
  let ranNum = [];
  for (let i = 1; i <= 2; i++) {
    ranNum.push(Math.floor(Math.random() * 100));
  }
  let Pi = Math.PI;
  let Pow = Math.pow(ranNum[0], 2);
  return Math.floor((Pi * Pow * ranNum[1]) / 3);
}
console.log(cone_volume());
