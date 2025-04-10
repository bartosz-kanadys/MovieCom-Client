const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    writers: [String],
    awards: {
      wins: Number,
      nominations: Number,
      text: String
    },
    lastupdated: String,
    year: Number,
    imdb: {
      rating: Number,
      votes: Number,
      id: Number
    },
    countries: [String],
    type: String,
    tomatoes: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number
      },
      website: String,
      production: String,
      lastUpdated: Date,
      dvd: Date
    }
  });

const Movie = mongoose.model('movie', movieSchema);
module.exports = { Movie }