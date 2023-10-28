const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  socket.on("signal", (data) => {
    socket.broadcast.emit("signal", data);
  });
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});
