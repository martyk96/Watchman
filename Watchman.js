// Creates all the server objects to be passed into the array
var servers=[
  {name:"Alpha",position:"primary",status:"up"},
  {name:"Bravo",position:"secondary", status:"up"},
  {name:"Charlie",position:"secondary", status:"up"},
  {name:"Delta", position:"secondary",status:"down"}
]

for(x=0; x<servers.length; x++)
{
  // creates div for each server on the network
  var serverDiv = document.createElement('div');
  serverDiv.className=servers[x].position; //class name is based on position of server
  serverDiv.id = servers[x].status;
  var serverName = document.createTextNode(servers[x].name); //text is the name of the server
  serverDiv.appendChild(serverName); //appends the name to the div

  var p = document.createElement('p'); //creates a new paragraph

  var promoteButton = document.createElement('button');
  var buttonText = document.createTextNode("Promote");
  promoteButton.appendChild(buttonText); //appends text to button
  p.appendChild(promoteButton); //appends button to new paragraph
  serverDiv.appendChild(p); //appends paragraph to div

  document.body.appendChild(serverDiv);
}
