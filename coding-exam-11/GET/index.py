from http.server import BaseHTTPRequestHandler,HTTPServer

class MakeDoc(BaseHTTPRequestHandler):
  def GET(self):
    self.send_response(200)
    self.send_header('Content-Type','text/html; charset=utf-8')
    self.end_headers()
    self.wfile.write('head.txt')

port = 8000

httpd = HTTPServer(('0.0.0.0',port),MakeDoc)
print(f'Server running on port : {port}')
httpd.serve_forever()
