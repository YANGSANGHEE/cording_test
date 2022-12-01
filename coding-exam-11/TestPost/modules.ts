import * as fs from 'fs';

export interface objToJson {
  ToJson(): void;
  View(): string;
}
export interface JsonData {
  [index: string]: string;
}

export class objTojson implements objToJson {
  obj: any; // 타입명시 알아보기
  filename: string | null;
  //지정할 파일이름(현재 default로 form의 name으로 지정해놓음.)
  constructor(obj: any, filename: string) {
    this.obj = obj;
    //json화 시킬 객체
    this.filename = filename;
    //json 파일을 저장할 파일 네임
  }
  ToJson(): void {
    let date = new Date();
    //날짜를 넣기위한  Date 객체
    this.obj.day = `${date}`;
    fs.writeFile(
      `${this.filename}.json`,
      JSON.stringify(this.obj), //매개변수로 들어오는 객체를 JSON화
      (err: NodeJS.ErrnoException | null) => {
        if (err) throw err;
        console.log('파일생성 완료');
      }
    );
  }
  View(): string {
    //Post로 넘어오는 객체를 end로 내보내기 위한 함수
    let Arr: string[] = [];
    for (let i in this.obj) {
      Arr.push(`<p>${i}:${this.obj[i]}</p>`);
    }
    return `${fs.readFileSync('../POST/TestFiles/head.txt', 'utf8')}${Arr.join(
      ''
    )}`;
  }
}
