const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

///////////////////////////////////////////
// START SERVER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
