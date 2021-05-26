const express = require("express");
const cors = require("cors");
const app = express();

const postRouter = require("./routes/postRoutes");

///////////////////////////////////////////
// MIDDLEWARE
app.use(cors());
app.use(express.json());

///////////////////////////////////////////
// ROUTES
app.use("/api/v1/posts", postRouter);

module.exports = app;
