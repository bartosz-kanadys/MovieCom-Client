const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
  });

const Comment = mongoose.model('comment', commentSchema);
module.exports = { Comment }