/**
 * dirFileToJson : 인스턴스 매개변수로 파일이 들어있는 폴더경로와 charSet 저장할 파일 이름 입력하면 Json 파일로 생성 메서드명(sumFile)
 * Ex)new dirFileToJson('./TestFiles','utf8').SumFile()
 * 
 * SetWriteHead : 인스턴스 매개변수로 상태코드 문서콘텐츠타입 응답(res)(http.createServer안에서)입력하면 응답 헤더 설정
 * Ex) new SetWriteHead(200,'text/html',res)
 * 
 * MakeDoc : json 파일을 파싱하여 json 내용을 txt 변경후 문자열로 리턴
 */


const fs = require('fs');

class dirFileToJson {
  constructor(fileDoc, charset, filename) {
    this.fileDoc = fileDoc
    this.charset = charset
    this.filename = filename
  }
  SumFile() {
    if (typeof this.fileDoc === 'string' && typeof this.charset === 'string') {
      let TxtObj = {} // 오브젝트 선언
      let GetFileArr = fs.readdirSync(`${this.fileDoc}`, (err, FileList) => {
        if (err) throw err
        return FileList;
      });
      //파일리스트 배열화
      let Settxt = GetFileArr.map((value) => {
        return [value.split('.')[0], fs.readFileSync(`${this.fileDoc}/${value}`, this.charset)]
      })
      //파일리스트 object화 하기위한 map
      Settxt.forEach((value) => {
        TxtObj[value[0]] = value[1];
      })
      return fs.writeFileSync(`${this.filename}.json`, JSON.stringify(TxtObj));
    }
  }
}

class SetWriteHead {
  constructor(StateCode, ConType, res) {
    this.StateCode = StateCode //stateCode
    this.ConType = ConType // ContentType
    this.res = res // response
  }
  WriteHead() {
    if (typeof this.StateCode === 'number' && typeof this.ConType === "string" && this.res !== null) {
      return this.res.writeHead(`${this.StateCode}`, { 'Content-Type': `${this.ConType}` })
    }
  }
}

const MakeDoc = (fileName) => {
  let FileArr = []
  let body
  if (typeof fileName === 'string') {
    if (fileName.includes('.json')) {
      let Parse = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
      return new Promise((resolve) => {
        FileArr.push(Parse['header'])
        resolve(Parse['main'])
      }).then((value) => {
        // console.log(value)
        FileArr.push(value)
        // console.log(FileArr)
        return Parse['footer'] // 왜 resolve는 안담기고 return은 되는가 ... ?
      }).then((value2) => {
        FileArr.push(value2)
        // console.log(value2)
        fs.writeFileSync(`./TestFiles/body.txt`, FileArr.join(''), 'utf8');
        body = fs.readFileSync(`./TestFiles/body.txt`, 'utf8');
        return `${Parse.head}${body}`
      });
    }
  }
}

const makeNewDoc = (filename, data) => {
  if (typeof filename === 'string' && data !== null) {
    fs.writeFileSync(`${filename}.txt`, data, 'utf8');
    let head = fs.readFileSync('./TestFiles/head.txt', 'utf8')
    let con = fs.readFileSync(`${filename}.txt`, 'utf8');
    return `${head}<body>${con}</body>`
  }
}

module.exports = {
  dirFileToJson,
  SetWriteHead,
  MakeDoc,
  makeNewDoc
}