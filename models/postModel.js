const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: { type: String, required: [true, "A Post must have an image."] },
  author: { type: String, required: [true, "A Post must have an author."] },
  timestamp: { type: Number, default: Date.now },
  description: {
    type: String,
    required: [true, "A Post must have description"],
  },
  likes: { type: Number, default: 0 },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
