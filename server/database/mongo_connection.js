const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://root:root@localhost:27017/project_js?authSource=admin';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
    });