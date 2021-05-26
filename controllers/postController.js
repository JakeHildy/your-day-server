const Post = require("./../models/postModel");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ status: "success", data: posts });
  } catch (err) {
    res.status(400).json({ status: "error" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({ status: "success", data: newPost });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPosting = await Post.findByIdAndDelete(id);

    if (!deletedPosting)
      return res
        .status(404)
        .json({ status: "fail", message: `Post with id: ${id} not found.` });

    res.status(201).json({
      status: "success",
      message: `${id} post deleted.`,
      data: deletedPosting,
    });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ status: "success", data: updatedPost });
  } catch (err) {
    res.status(400).json({ status: "fail" });
  }
};

exports.likePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(201).json({ status: "success", data: updatedPost });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: -1 } },
      { new: true }
    );
    res.status(201).json({ status: "success", data: updatedPost });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};
