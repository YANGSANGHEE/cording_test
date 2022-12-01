import * as http from 'http';
import * as fs from 'fs';
import * as qs from 'querystring';
import { objTojson } from './modules';
const Port = process.env.Port || 5580;

http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html;cahrset=utf-8' });
    let url: string | undefined = req.url;
    let Databody: string = '';

    switch (url) {
      case req.method === 'GET' ? '/' : null:
        fs.readFile(
          './index.html',
          'utf8',
          (err: NodeJS.ErrnoException | null, data) => {
            if (err) throw err;
            res.end(data);
          }
        );
        break;
      case req.method === 'POST' ? '/get_post' : null:
        req.on('data', (data) => {
          Databody += data;
        });
        req.on('end', () => {
          let Con = qs.parse(Databody);
          new objTojson(Con, `${Con.name}`).ToJson();
          res.end(`${new objTojson(Con, '').View()}`);
        });
        break;
      default:
        res.statusCode = 404;
        res.end('404 not found');
    }
  })
  .listen(Port, (err?: ErrorCallback) => {
    if (err) throw err;
    console.log(`Start Server ${Port}`);
  });
