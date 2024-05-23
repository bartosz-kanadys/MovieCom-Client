const express = require('express');
const router = express.Router();
const { Movie } = require('../models/MovieModel')


module.exports = {
    async getAll(req, res) {
        try {
            const movies = await Movie.find()
            res.status(200).json(movies)

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async getById(req, res) {
        try {
            const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie)

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async create(req, res) {
        try {
            let movie =  new Movie(req.body)
            await movie.save()
            res.status(200).json(movie)

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    }
}