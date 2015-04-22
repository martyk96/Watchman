// Creates all the server objects to be passed into the array
var servers=[
  {name:"Alpha",position:"primary",status:"up"},
  {name:"Bravo",position:"secondary", status:"up"},
  {name:"Charlie",position:"secondary", status:"up"},
  {name:"Delta", position:"secondary",status:"down"}
]

var div;

for(x=0; x<servers.length; x++)
{
  div = new Server(servers[x])
  document.body.appendChild(div.createDiv());
}
