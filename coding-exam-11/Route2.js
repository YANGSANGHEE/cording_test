"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
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
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const Port = process.env.Port || 8282;
const ServerSet = (tag, style, href) => {
    let head = fs.readFileSync('head.txt', 'utf8');
    return `
    ${head}
    <body style='display:flex; flex-direction:column; align-items:center; justify-content:center;'>
      <h1 style="${style} text-align:center;">${tag}</h1>
      <button onclick="location.href='http://localhost:8282/${href}'">공욱재미남</button>
    </body>`;
};
const Server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let path = req.url;
    if (req.method === 'GET') {
        switch (path) {
            case '/':
                res.end(ServerSet('Home 입니다.', 'color:coral; ', 'about'));
                break;
            case '/about':
                res.end(ServerSet('about 입니다.', 'color:green;', 'contact'));
                break;
            case '/contact':
                res.end(ServerSet('contact 입니다.', 'color:pink;', ''));
                break;
            default:
                res.statusCode = 404;
                res.end('<h1>404 NOT FOUND</h1>');
                break;
        }
    }
});
Server.listen(Port, (err) => {
    // 에러처리
    if (err)
        throw err;
    console.log(`Start Server ${Port} `);
});
