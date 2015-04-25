function serverView(server) {
  this.server = server;
};
  serverView.prototype.createDiv = function() {
      this.serverDiv = document.createElement('div');
      this.serverDiv.className = this.server.position; //class name is based on position of server
      this.serverDiv.setAttribute('status', this.server.status);

      this.serverDiv.textContent = this.server.name; //appends the name to the div

      var p = document.createElement('p'); //creates a new paragraph

      var promoteButton = document.createElement('button');
      var buttonText = document.createTextNode("Promote");
      promoteButton.appendChild(buttonText); //appends text to button
      p.appendChild(promoteButton); //appends button to new paragraph
      this.serverDiv.appendChild(p); //appends paragraph to div

      return this.serverDiv;
    }

  serverView.prototype.update = function(server){
      this.server = server;
      this.serverDiv.className = this.server.position; //class name is based on position of server
      this.serverDiv.setAttribute('status', this.server.status);

  }
