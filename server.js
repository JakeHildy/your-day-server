const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

///////////////////////////////////////////
// MIDDLEWARE
app.use(cors());
app.use(express.json());

///////////////////////////////////////////
// START SERVER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
