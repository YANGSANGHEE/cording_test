const payList = (bike, taxi, encina, kanu, chicken, milk) => {
  let pays = {
    towrokcost: {
      kakaobike: bike * 1500,
      taxi: taxi * 3500,
    },
    coffie: {
      encina: encina * 4500,
      kanu: kanu * 800,
    },
    catssnack: {
      chicken: chicken * 400,
      milk: milk * 800
    }
  }
  let { towrokcost, coffie, catssnack } = pays
  let totalpays = towrokcost.kakaobike + towrokcost.taxi + coffie.encina + coffie.kanu + catssnack.chicken + catssnack.milk

  return [pays, totalpays]
}

console.log(payList(19, 3, 6, 15, 30, 2))
const commingsoon = (budget, price) => {

}