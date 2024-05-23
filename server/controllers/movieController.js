const express = require('express');
const router = express.Router();
const { Movie } = require('../models/MovieModel')


module.exports = {
    async getAll(req, res) {
        try {
            const movies = await Movie.find()
            console.log(movies)
            res.status(200).json(movies)

        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
        
    }
}