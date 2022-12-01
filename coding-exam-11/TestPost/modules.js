"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objTojson = void 0;
const fs = __importStar(require("fs"));
class objTojson {
    constructor(obj, filename) {
        this.obj = obj;
        this.filename = filename;
    }
    ToJson() {
        let date = new Date();
        this.obj.day = `${date}`;
        fs.writeFile(`${this.filename}.json`, JSON.stringify(this.obj), (err) => {
            if (err)
                throw err;
            console.log('파일생성 완료');
        });
    }
    View() {
        let Arr = [];
        for (let i in this.obj) {
            Arr.push(`<p>${i}:${this.obj[i]}</p>`);
        }
        return `${fs.readFileSync('../POST/TestFiles/head.txt', 'utf8')}${Arr.join('')}`;
    }
}
exports.objTojson = objTojson;
