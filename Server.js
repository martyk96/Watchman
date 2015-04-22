function Server(server) {
  this.position = server.position;
  this.name = server.name;
  this.status = server.status;
};
  Server.prototype.createDiv = function() {
      var serverDiv = document.createElement('div');
      serverDiv.className = this.position; //class name is based on position of server
      serverDiv.id = this.status;

      var serverName = document.createTextNode(this.name); //text is the name of the server
      serverDiv.appendChild(serverName); //appends the name to the div

      var p = document.createElement('p'); //creates a new paragraph

      var promoteButton = document.createElement('button');
      var buttonText = document.createTextNode("Promote");
      promoteButton.appendChild(buttonText); //appends text to button
      p.appendChild(promoteButton); //appends button to new paragraph
      serverDiv.appendChild(p); //appends paragraph to div

      return serverDiv;
    }
