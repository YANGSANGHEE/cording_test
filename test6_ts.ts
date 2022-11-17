interface paylist1 {
  카카오톡자전거: string;
  택시: string;
}
interface paylist2 {
  엔시나: string;
  카누: string;
}
interface paylist3 {
  닭고기: string;
  락토프리우유: string;
}
interface lists {
  출퇴근비용: object;
  커피: object;
  고양이간식: object;
}
interface getlist {
  (list1: paylist, list2: paylist): string;
}

class paylist implements lists {
  출퇴근비용: paylist1;
  커피: paylist2;
  고양이간식: paylist3;
  constructor(출퇴근비용: paylist1, 커피: paylist2, 고양이간식: paylist3) {
    this.출퇴근비용 = 출퇴근비용;
    this.커피 = 커피;
    this.고양이간식 = 고양이간식;
  }
}

let picklist = new paylist(
  {
    카카오톡자전거: '1500원',
    택시: '3500원',
  },
  {
    엔시나: '4500원',
    카누: '200원',
  },
  {
    닭고기: '400원',
    락토프리우유: '800원',
  }
);

let pickreceipe = new paylist(
  {
    카카오톡자전거: '19회',
    택시: '3회',
  },
  {
    엔시나: '6잔',
    카누: '15잔',
  },
  {
    닭고기: '30개',
    락토프리우유: '2개',
  }
);
// --------------------------------------------------------------

// console.log(picklist, pickreceipe);

const commingsoon: getlist = (list1, list2) => {
  let { 출퇴근비용, 커피, 고양이간식 } = list1;
  return '';
};

console.log(commingsoon(picklist, pickreceipe));
