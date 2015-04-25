var http = require('http');
server = http.createServer()

var statusList=["up","down"];
var alphaStatus;



server.on('request', function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  if(Math.random()>0.5){
    alphaStatus = statusList[0]
    }
    else{
      alphaStatus = statusList[1]
    }
    var servers=[
      {name:"Alpha",position:"primary",status:alphaStatus},
      {name:"Bravo",position:"secondary", status:"up"},
      {name:"Charlie",position:"secondary", status:"up"},
      {name:"Delta", position:"secondary",status:"down"}
    ]

  response.write(JSON.stringify(servers))
  response.end();
})

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
