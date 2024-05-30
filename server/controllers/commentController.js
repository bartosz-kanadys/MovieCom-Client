const express = require('express');
const router = express.Router();
const { Comment } = require('../models/CommentModel');


module.exports = {
    async getAll(req, res) {
        try {
            const comments = await Comment.find()
            res.status(200).json(comments)
        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async getbyUser(req, res) {
        try {
            const comments = await Comment.find({ login: req.params.login });
            if (comments.length === 0) {
                return res.status(404).json({ error: "No comments found for this user" });
            }
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async getbyMovieId(req, res) {
        try {
            const comments = await Comment.find({ movieId: req.params.movieID });
            if (comments.length === 0) {
                return res.status(404).json({ error: "No comments found for this movie" });
            }
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async create(req, res) {
        try {
            const comment = new Comment(req.body);
            await comment.save();
            res.status(201).json({ message: "Comment added successfully" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async update(req, res) {
        const { filter, update } = req.body;
        if (!filter || !update) {
            return res.status(400).json({ error: "Filter and update data must be provided" });
        }

        try {
            const updatedComment = await Comment.findOneAndUpdate(filter, update, { new: true });
            if (!updatedComment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async delete(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id);
            if (!comment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

}

