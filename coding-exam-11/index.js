const http = require('http');
const fs = require('fs');
const port = process.env.Port || 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  if (req.method === "GET") {
    let data = []
    const readfile = (path) => {
      if (typeof path === 'object') {
        let body = fs.readFileSync('body.txt', 'utf8')
        let head = fs.readFileSync('head.txt', 'utf8')
        for (let i = 0; i < path.length; i++) {
          if (typeof path[i] === 'string') {
            data.push(fs.readFileSync(`${path[i]}.txt`, 'utf8'));
          }
        }
        fs.writeFileSync('body.txt', data.join(''), 'utf8')
        return `${head}${body}`
      }
    }
    res.end(`
    ${readfile(['header', 'main', 'footer'])}
    `
    )
  }
})

server.listen(port, (err) => {
  if (err) throw err
  console.log('server run 8080..');
})