import * as http from 'http';
import * as fs from 'fs';
const Port: string | 8282 = process.env.Port || 8282;

interface ServerSet {
  (tag: string, style: string, href: string): string;
}

const ServerSet: ServerSet = (tag, style, href) => {
  let head = fs.readFileSync('head.txt', 'utf8');
  return `
    ${head}
    <body style='display:flex; flex-direction:column; align-items:center; justify-content:center;'>
      <h1 style="${style} text-align:center;">${tag}</h1>
      <button onclick="location.href='http://localhost:8282/${href}'">공욱재미남</button>
    </body>`;
};

const Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let path: string | undefined = req.url;
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
          res.end('<h1>404 NOT FOUND</h1>');
          break;
      }
    }
  }
);

Server.listen(Port, (err?: ErrorCallback) => {
  // 에러처리
  if (err) throw err;
  console.log(`Start Server ${Port} `);
});
