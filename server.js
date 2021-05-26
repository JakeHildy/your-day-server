const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

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
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
