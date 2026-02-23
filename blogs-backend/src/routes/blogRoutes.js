const express = require("express");
const {
  createPost,
  getMyPosts,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/my", protect, getMyPosts);
router.get("/", getAllPosts);
router.post("/", protect, createPost);

router.get("/:id", getPostById);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
