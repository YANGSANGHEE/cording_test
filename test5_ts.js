"use strict";
const sortArray = (arr) => {
    if (arr.length > 0) {
        //매개변수 타입은 인터페이스에서 거름
        let objects = {
            One: 0,
            Two: 0,
            Three: 0,
            Four: 0,
            Five: 0,
        };
        let step = 0; //count
        for (let i = arr.length; i > 0; i--) {
            step++;
            for (let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let swap = arr[j];
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
