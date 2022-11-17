"use strict";
let pay1 = {
    카카오톡자전거: '1500원',
    택시: '3500원',
};
let pay2 = {
    엔시나: '4500원',
    카누: '200원',
};
let pay3 = {
    닭고기: '400원',
    락토프리우유: '800원',
};
let paybill1 = {
    카카오톡자전거: '19회',
    택시: '3회',
};
let paybill2 = {
    엔시나: '6잔',
    카누: '15잔',
};
let paybill3 = {
    닭고기: '30개',
    락토프리우유: '2개',
};
class paylist {
    constructor(출퇴근비용, 커피, 고양이간식) {
        this.출퇴근비용 = 출퇴근비용;
        this.커피 = 커피;
        this.고양이간식 = 고양이간식;
    }
}
let picklist = new paylist(pay1, pay2, pay3);
console.log(typeof picklist);
let pickreceipe = new paylist(paybill1, paybill2, paybill3);
const { 출퇴근비용, 커피, 고양이간식 } = picklist;
// --------------------------------------------------------------
// console.log(picklist, pickreceipe);
const commingsoon = (list1, list2) => {
    const { 출퇴근비용, 커피, 고양이간식 } = list1;
    return '';
};
console.log(commingsoon(picklist, pickreceipe));
