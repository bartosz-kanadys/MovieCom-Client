const express = require('express');
const router = express.Router();
const { Movie } = require('../models/MovieModel');
const { User } = require('../models/UserModel');


module.exports = {
    async getAll(req, res) {
        try {
            const movies = await Movie.find()
            res.status(200).json(movies)

        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async getById(req, res) {
        try {
            const movie = await Movie.findById(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: "Movie not found" });
            }
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async getByTitle(req, res) {
        try {
            const movie = await Movie.find({ title: req.params.title })
            res.status(200).json(movie)

        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async get10(req, res) {
        const title = req.query.title || ".*";
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 10;

        try {
            const movies = await Movie.find({ title: new RegExp(title, 'i') })
                .skip(skip)
                .limit(limit);
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async create(req, res) {
        try {
            const movie = new Movie(req.body);
            await movie.save();
            res.status(201).json({ message: "Movie added to the database" });
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
            const updatedMovie = await Movie.findOneAndUpdate(filter, update, { new: true });
            if (!updatedMovie) {
                return res.status(404).json({ error: "Movie not found" });
            }
            res.status(200).json({ message: "Updated", movie: updatedMovie });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async delete(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: "Movie not found" });
            }
            res.status(200).json({ message: "Movie deleted from the database" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },
}