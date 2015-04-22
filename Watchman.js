// Creates all the server objects to be passed into the array
var servers=[
  {name:"Alpha",position:"primary",status:"up"},
  {name:"Bravo",position:"secondary", status:"up"},
  {name:"Charlie",position:"secondary", status:"up"},
  {name:"Delta", position:"secondary",status:"down"}
]

var page = new serverPage();

page.createDiv(servers);
