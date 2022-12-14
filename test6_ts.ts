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
  출퇴근비용: paylist1;
  커피: paylist2;
  고양이간식: paylist3;
  [index: string]: object;
}
interface listname {
  고정지출항목: lists;
  고정지출내역: lists;
}
interface getlist {
  (list1: paylist): string;
}

class paylist implements listname {
  '고정지출항목': lists;
  '고정지출내역': lists;
  constructor(고정지출내역: lists, 고정지출항목: lists) {
    this.고정지출항목 = 고정지출항목;
    this.고정지출내역 = 고정지출내역;
  }
}

const pays: lists = {
  출퇴근비용: {
    카카오톡자전거: '1500원',
    택시: '3500원',
  },
  커피: {
    엔시나: '4500원',
    카누: '200원',
  },
  고양이간식: {
    닭고기: '400원',
    락토프리우유: '800원',
  },
};

const pays2: lists = {
  출퇴근비용: {
    카카오톡자전거: '19회',
    택시: '3회',
  },
  커피: {
    엔시나: '6잔',
    카누: '15잔',
  },
  고양이간식: {
    닭고기: '30개',
    락토프리우유: '2개',
  },
};

let picklist = new paylist(pays, pays2);

// --------------------------------------------------------------

// console.log(picklist);

const commingsoon: getlist = (lists) => {
  const { 고정지출항목, 고정지출내역 } = lists;
  let arr1: any = [];
  let arr2: any = [];
  let arr3: any = [];
  let arr4: any = [];
  let namearr: string[] = [];
  for (let value in 고정지출항목) {
    // console.log(고정지출항목[value]);
    arr1.push(고정지출항목[value]);
  }
  console.log(namearr);
  for (let value in 고정지출내역) {
    // console.log(고정지출내역[value]);
    arr2.push(고정지출내역[value]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let value in arr1[i]) {
      arr3.push(arr1[i][value]);
      namearr.push(value);
    }
    for (let value in arr2[i]) {
      arr4.push(arr2[i][value]);
    }
  }
  console.log(namearr);
  let arr5 = arr3.map((value: string) => {
    return Number(value.slice(0, -1));
  });

  let arr6 = arr4.map((value: string) => {
    return Number(value.slice(0, -1));
  });

  let money = 100000;
  let game = 64800;
  let mustpay = arr5[4] * arr6[4] + arr5[5] * arr6[5];
  let havetopay = game + mustpay;
  let need = money - havetopay;
  let counts = [];

  let getup_count = 0;
  let coffe_count = 0;
  while (need >= 0) {
    let rannum = Math.floor(Math.random() * 3);
    let rannum2 = Math.floor(Math.random() * (6 - 1) + 1);
    need -= arr6[rannum] * rannum2;
    if (rannum === 0 || rannum === 1) {
      getup_count++;
    } else if (rannum === 2 || rannum == 3) {
      coffe_count++;
    }
    counts.push({
      한것: rannum,
      일어난카운트: getup_count,
      커피애낀카운트: coffe_count,
      아끼는금액: arr6[rannum] * rannum2,
    });
  }

  //어떻게 0에 딱 맞아 떨어지도록 해야할지 모르겠음...
  //원장님 카드는 도대체 무슨 이벤트로 처리해야 할지 모르겠음.

  console.log(counts);
  return '';
};

console.log(commingsoon(picklist));
