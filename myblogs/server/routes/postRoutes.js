const express = require('express');
const router = express.Router();

const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require('../controller/postController');

const { protect } = require('../middleware/authMiddleware');

// CREATE
router.post("/", protect, createPost);


// READ
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// UPDATE
router.put("/:id", protect, updatePost);

// DELETE
router.delete("/:id", protect, deletePost);

module.exports = router;