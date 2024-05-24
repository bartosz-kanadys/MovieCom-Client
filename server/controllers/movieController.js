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

    async getByTitle(req, res) {
        try {
            const movie = await Movie.find({title: req.params.title})
            res.status(200).json(movie)

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async create(req, res) {
        try {
            let movie =  new Movie(req.body)
            await movie.save()
            res.status(200).json({msg: "Dodano do bazy"})

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async update(req, res) {
        try {
            const filter = req.body.filter
            const update = req.body.update
            console.log(filter)
            await Movie.findOneAndUpdate(filter, update)
            res.status(200).json({msg: "Updated"})
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },
}