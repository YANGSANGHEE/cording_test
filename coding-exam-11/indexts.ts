import * as http from 'http';
import * as fs from 'fs';
const port: string | number = process.env.Port || 1361;

interface readfiles {
  (paths: string[]): string;
}

const Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.method === 'GET') {
      let data: string[] = [];
      const readfile: readfiles = (path) => {
        let head: string = fs.readFileSync('head.txt', 'utf8');
        let body: string = fs.readFileSync('body.txt', 'utf8');
        for (let i = 0; i < path.length; i++) {
          data.push(fs.readFileSync(`${path[i]}.txt`, 'utf8'));
        }
        fs.writeFileSync('body.txt', data.join(''), 'utf8');
        return `${head}${body}`;
      };
      res.end(`${readfile(['header', 'main', 'footer'])}`);
    }
  }
);

Server.listen(port, () => {
  try {
    console.log(`start server ${port}`);
  } finally {
    console.error;
  }
});
