const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userLogin: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    content: {
        type: Date,
        required: true
    }
  });

const Comment = mongoose.model('comment', commentSchema);
module.exports = { Comment }