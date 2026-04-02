const Post = require('../models/postModels');


// 🟢 CREATE POST
const createPost = async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;

        // 1. Validation
        if (!title || !content || !category) {
            return res.status(400).json({ message: "Title, content, and category are required" });
        }

        if (title.length < 5) {
            return res.status(400).json({ message: "Title must be at least 5 characters long" });
        }

        if (content.length < 20) {
            return res.status(400).json({ message: "Content must be at least 20 characters long" });
        }

        const post = await Post.create({
            title,
            content,
            category,
            tags,
            author: req.user._id // updated to use user object from improved middleware
        });

        res.status(201).json({
            message: "Post created",
            post
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 🔵 GET ALL POSTS (with pagination)
const getAllPosts = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 5;

        const posts = await Post.find({ isPublished: true })
            .populate('author', 'name email')
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 🟡 GET SINGLE POST
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'name email');

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Increase views only if the viewer is NOT the author (basic fix)
        // Note: In a real app, this would use session/IP tracking to prevent spam
        if (req.user !== post.author._id.toString()) {
            post.views += 1;
            await post.save();
        }

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 🟠 UPDATE POST
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // check ownership
        if (post.author.toString() !== req.user) {
            return res.status(403).json({ message: "Unauthorized: You can only update your own posts" });
        }

        // Safe Update: Define allowed fields explicitly
        const { title, content, category, tags, isPublished, coverImage } = req.body;
        
        const updateData = {};
        if (title !== undefined) updateData.title = title;
        if (content !== undefined) updateData.content = content;
        if (category !== undefined) updateData.category = category;
        if (tags !== undefined) updateData.tags = tags;
        if (isPublished !== undefined) updateData.isPublished = isPublished;
        if (coverImage !== undefined) updateData.coverImage = coverImage;

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Post updated",
            updatedPost
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 🔴 DELETE POST
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // check ownership
        if (post.author.toString() !== req.user) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await post.deleteOne();

        res.status(200).json({
            message: "Post deleted"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
};