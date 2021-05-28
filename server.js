const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const socketio = require("socket.io");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

///////////////////////////////////////////
// CONNECT TO DATABASE
const DB = process.env.DATABASE.replace(
  "password",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

///////////////////////////////////////////
// START SERVER
const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

///////////////////////////////////////////
// START SOCKETS
const io = socketio(expressServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  const connectionString = `${socket.id} connected to server.`;
  console.log(connectionString);
  socket.emit("connectedToServer", { payload: connectionString });
  socket.on("uploadedImage", (data) => {
    console.log(data);
    io.emit("imageWasUploaded", { payload: "Image was uploaded" });
  });
});
