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
const port = process.env.Port || 1361;
const Server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.method === 'GET') {
        let data = [];
        const readfile = (path) => {
            let head = fs.readFileSync('head.txt', 'utf8');
            let body = fs.readFileSync('body.txt', 'utf8');
            for (let i = 0; i < path.length; i++) {
                data.push(fs.readFileSync(`${path[i]}.txt`, 'utf8'));
            }
            fs.writeFileSync('body.txt', data.join(''), 'utf8');
            return `${head}${body}`;
        };
        res.end(`${readfile(['header', 'main', 'footer'])}`);
    }
});
Server.listen(port, () => {
    try {
        console.log(`start server ${port}`);
    }
    finally {
        console.error;
    }
});
