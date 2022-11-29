const http = require('http');
const fs = require('fs');
const port = process.env.Port || 8080

const ServerSet = (tag, style, href) => {
  if (typeof tag === 'string' && typeof href === 'string' && typeof style === 'string') {
    let head = fs.readFileSync('head.txt', 'utf8');
    return `
    ${head}
    <body style='display:flex; 
    flex-direction:column; 
    align-items:center; 
    justify-content:center; 
    background-color:${style}'>
      <h1 style="color:white; text-align:center;">
      ${tag} 입니다.
      </h1>
      <button onclick="location.href='http://localhost:8080/${href}'">공욱재미남</button>
    </body>`
  }
}

const Server = http.createServer((req, res) => { // 순서 잘 맞추기(요청=>응답)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const path = req.url // 굳이 정규식 쓸 필요가 없는듯

  if (req.method === "GET") {
    switch (path) {
      case '/':
        res.end(ServerSet('Home', 'coral', 'about'));
        break;
      case '/about':
        res.end(ServerSet('about', 'green', 'contact'));
        break;
      case '/contact':
        res.end(ServerSet('contact', 'hotpink', ''));
        break;
      default:
        res.statusCode = 404;
        res.end(ServerSet('404 Error 메롱'))
        break;
    }
  }
})

Server.listen(port, (err) => {
  if (err) throw err
  console.log(`Start Server ${port} `)
})