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
const qs = __importStar(require("querystring"));
const modules_1 = require("./modules");
const Port = process.env.Port || 5580;
http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html;cahrset=utf-8' });
        let url = req.url;
        let Databody = '';
        switch (url) {
            case req.method === 'GET' ? '/' : null:
                fs.readFile('./index.html', 'utf8', (err, data) => {
                    if (err)
                        throw err;
                    res.end(data);
                });
                break;
            case req.method === 'POST' ? '/get_post' : null:
                req.on('data', (data) => {
                    Databody += data;
                    console.log(Databody);
                });
                req.on('end', () => {
                    let Con = qs.parse(Databody);
                    new modules_1.objTojson(Con, 'infos').ToJson();
                    res.end(`${new modules_1.objTojson(Con, '')}`);
                });
                break;
            default:
                res.statusCode = 404;
                res.end('404 not found');
        }
    })
    .listen(Port, (err) => {
        if (err)
            throw err;
        console.log(`Start Server ${Port}`);
    });
