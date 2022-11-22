const fromInput: string =
  " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) ";

interface textlistup {
  (Str: string): string[];
}
//함수 interface
interface Regs {
  [key: string]: RegExp;
}
//정규식 interface
interface Strobjs {
  [index: string]: number;
}
//객체 inteface

const text_listup: textlistup = (Str) => {
  let Strobj: Strobjs = {};
  let validation: Regs = {
    valid: /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi,
  };
  // 정규식으로 띄어쓰기 특수문자 제거
  let StrArray: string[] = [...Str.toLowerCase().replace(validation.valid, '')];
  StrArray.forEach((value) => {
    Strobj[value] = (Strobj[value] || 0) + 1;
  });
  // 알파벳 객체화
  let SortObj: Strobjs = Object.fromEntries(
    Object.entries(Strobj).sort(([, a], [, b]) => b - a)
  );
  // 알파벳 value 기준으로 정렬
  let SortArr: [string, number][] = Object.entries(SortObj);
  // 객체를 배열화
  SortArr.sort((a, b) => a[1] - b[1]);
  // 배열을 값 순서대로 정렬
  let lowChar: string[] = [...StrArray];
  //배열복사
  for (let i = 0; i < SortArr[SortArr.length - 1][1] - SortArr[0][1]; i++) {
    lowChar.unshift(SortArr[0][0], SortArr[1][0]);
  }
  //복사한배열에 최소값을 지닌 알파벳 넣어줌
  let StrsArr: string[] = [];
  //빈배열선언
  lowChar.sort(() => Math.random() - 0.5);
  //난수 생성해서 셔플
  let Strs = lowChar.join('');
  //글씨합침
  for (let i = 0; i < lowChar.length; i++) {
    StrsArr.push(Strs.slice(i, i + 5));
  }
  return StrsArr;
};

console.log(text_listup(fromInput));
