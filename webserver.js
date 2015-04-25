var http = require('http');
server = http.createServer()

var servers=[
  {name:"Alpha",position:"primary",status:"up"},
  {name:"Bravo",position:"secondary", status:"up"},
  {name:"Charlie",position:"secondary", status:"up"},
  {name:"Delta", position:"secondary",status:"down"}
]

server.on('request', function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  response.write(JSON.stringify(servers))
  response.end();
})

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
