var view, servers, serverViews;

serverViews = {}

servers_request = new XMLHttpRequest()
servers_request.addEventListener('load', function(){
  servers = JSON.parse(servers_request.responseText);

  servers.forEach(function(server){
    view = new serverView(server)
    serverViews[server.name] = view
    document.body.appendChild(view.createDiv());
  })
})

servers_request.addEventListener('error', function(){
  alert("error: cannot connect");
})

servers_request.open("GET", "http://localhost:1337/")
servers_request.send()

window.setInterval(function(){
  servers_request = new XMLHttpRequest()
  servers_request.addEventListener('load', function(){
    servers = JSON.parse(servers_request.responseText);

    servers.forEach(function(server){
      view = serverViews[server.name]
      view.update(server)
    })
  })

  servers_request.addEventListener('error', function(){
    alert("error: cannot connect");
  })

  servers_request.open("GET", "http://localhost:1337/")
  servers_request.send()
},1000);
