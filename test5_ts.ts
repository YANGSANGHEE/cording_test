interface getSort {
  (arr: number[]): void;
} // 함수 , if문안에서 return 을 할것이기 때문에 void 선언

interface numObj {
  One: number;
  Two: number;
  Three: number;
  Four: number;
  Five: number;
  [index: string]: number; // Index Signature
} // 객체

const sortArray: getSort = (arr) => {
  if (arr.length > 0) {
    //매개변수 타입은 인터페이스에서 거름

    let objects: numObj = {
      One: 0,
      Two: 0,
      Three: 0,
      Four: 0,
      Five: 0,
    };

    let step: number = 0; //count

    for (let i = arr.length; i > 0; i--) {
      step++;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let swap: number = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
        }
      }
      if (i < Object.keys(objects).length) {
        objects[Object.keys(objects)[i]] = arr[i];
      }
    }
    console.log(step);
    return objects;
  }
};

console.log(sortArray([6, 2, 9, 8, 4, 0, 3, 5, 7, 1]));
