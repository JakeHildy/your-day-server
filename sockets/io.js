const io = require("./../server");

io.on("connection", (socket) => {
  console.log("id", socket.id);
  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });
});
