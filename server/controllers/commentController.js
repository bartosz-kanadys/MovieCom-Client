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
            const comment = await Comment.find({ login: req.params.login })
            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async getbyMovieId(req, res) {
        try {
            const comment = await Comment.find({ movieId: req.params.movieID })
            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async create(req, res) {
        try {
            let comment = new Comment(req.body)
            await comment.save()
            res.status(200).json({ msg: "Thanks for comment" })

        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
            console.log(error)
        }
    },

    async update(req, res) {
        try {
            const filter = req.body.filter
            const update = req.body.update
            console.log(filter)
            await Comment.findOneAndUpdate(filter, update)
            res.status(200).json({ msg: "Updated" })
        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async delete(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json({msg: "Comment deleted"})
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

}

