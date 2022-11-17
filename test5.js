const sortArray = (arr) => {
  if (Array.isArray(arr) === true && arr.length > 0) { // 배열인지 체크하고 배열길이 체크
    let objects = {
      "one": 0,
      "two": 0,
      "Three": 0,
      "Four": 0,
      "Five": 0,
    }

    let step = 0 // count

    for (let i = arr.length; i > 0; i--) { // i = 10 / 10 > 0 / i-- (배열 순회)
      // console.log(arr)
      step++
      for (let j = 0; j < i - 1; j++) { //  0,1,2,3,4,5,6,7,8(index)
        if (arr[j] > arr[j + 1]) { //배열의 다음요소와 비교 만약 기존요소가 다음 요소값보다 클때 
          let swap = arr[j] //기존값을 변수에 담음
          arr[j] = arr[j + 1] // 기존값을 다음 요소로 바꿈
          arr[j + 1] = swap // 다음요소를 기존값으로 바꿈
        }
      }
      if (i < Object.keys(objects).length) { // Object.keys()는 배열을 반환
        objects[Object.keys(objects)[i]] = arr[i] //ex) Object.keys(objects)[0] = "one",arr[0]=0 / objects["one"]=0
      }
    }
    console.log(step)
    return objects
  } else {
    console.log('매개변수로 배열만 요구되며 빈 배열은 안됩니다.')
    throw error
  }
}
console.log(sortArray([6, 2, 9, 8, 4, 0, 3, 5, 7, 1]))