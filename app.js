const express = require("express");
const cors = require("cors");
const app = express();

const postRouter = require("./routes/postRoutes");
const imageRouter = require("./routes/imageRoutes");

///////////////////////////////////////////
// MIDDLEWARE
app.use(cors());
app.use(express.json());

///////////////////////////////////////////
// ROUTES
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/images", imageRouter);

module.exports = app;
