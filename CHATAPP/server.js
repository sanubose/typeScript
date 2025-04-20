var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

let users = [];
let connections = [];

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Handle socket connections
io.sockets.on("connection", function (socket) {
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length);

  // Handle disconnect
  socket.on("disconnect", function () {
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);
  });

  // Handle sending message
  socket.on("send message", function (data) {
    console.log(data);
    io.sockets.emit("new message", { msg: data });
  });
});

console.log('server is listening')