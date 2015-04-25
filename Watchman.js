var view, servers;

servers_request = new XMLHttpRequest()
servers_request.addEventListener('load', function(){
  servers = JSON.parse(servers_request.responseText);

  servers.forEach(function(server){
    view = new serverView(server)
    document.body.appendChild(view.createDiv());
  })
})

servers_request.open("GET", "http://localhost:1337/")
servers_request.send()
