const Blog = require("../models/Blog.js");

const createPost = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const post = await Blog.create({
      title,
      content,
      image,
      author: req.user._id, // coming from auth middleware
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMyPosts = async (req, res) => {
  try {
    const posts = await Blog.find({ author: req.user._id })
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id).populate(
      "author",
      "name email",
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  try {
    const post = await Blog.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id }, // 🔐 auth check
      req.body,
      { new: true, runValidators: true },
    );

    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or not authorized" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // only author can delete
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();
    res.json({ message: "Post removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  getMyPosts,
  updatePost,
};
