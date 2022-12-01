const http = require('http');
const qs = require('querystring')
const Port = process.env.Port || 1857
const { dirFileToJson, SetWriteHead, MakeDoc, makeNewDoc } = require('../SumDoc')


http.createServer((req, res) => {
  new dirFileToJson('./TestFiles', 'utf8', 'Doc').SumFile()
  new SetWriteHead(200, 'text/html', res).WriteHead()
  let url = req.url
  let Databody = ''
  switch (url) {
    case (req.method === 'GET' ? '/' : null):
      MakeDoc('../Doc.json').then((value) => {
        res.end(value)
      })
      break;
    case (req.method === 'POST' ? '/start_post' : null):
      req.on('data', (data) => {
        Databody += data
      })
      req.on('end', () => {
        let Con = qs.parse(Databody)
        let title = Con.titles
        let description = Con.description
        res.end(`${makeNewDoc('PostDoc', (title + description))}`)
      })
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found')
  }
}).listen(Port, (err) => {
  if (err) throw err;
  console.log(`StartServer ${Port}`)
})