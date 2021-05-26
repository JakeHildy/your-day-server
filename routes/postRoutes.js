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

router.route("/like/:id").post(postController.likePost);
router.route("/unlike/:id").post(postController.unlikePost);

module.exports = router;
