const express = require("express");
const postController = require("./../controllers/postController");

const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route("/:id")
  .delete(postController.deletePost)
  .patch(postController.updatePost);

module.exports = router;
