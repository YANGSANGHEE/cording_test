const http = require('http');
const fs = require('fs');
const { isArray } = require('util');
const Port = process.env.Port || 2020;


const Server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  let Docs = []
  const SumDoc = (SumDoc, Doc) => {
    if (typeof SumDoc === 'string' && Array.isArray(Doc)) {
      let head = fs.readFileSync('head.txt', 'utf8')
      let index = fs.readFileSync(`${SumDoc}.txt`, 'utf8')
      for (let i = 0; i < Doc.length; i++) {
        Docs.push(fs.readFileSync(`${Doc[i]}.txt`, 'utf8'))
      }
      fs.writeFileSync(`${SumDoc}.txt`, Docs.join(''), 'utf8');
      return `${head}${index}`
    }
  }
  res.end(`${SumDoc('body', ['header', 'main', 'form'])}`)
})

Server.listen(Port, (err) => {
  if (err) throw err
  console.log(`Start Server ${Port}`)
})