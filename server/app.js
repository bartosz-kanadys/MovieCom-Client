const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/usersRoute');
const moviesRouter = require("./routes/moviesRoute");
const authorizationRouter = require('./routes/authorizationRoute');
const commentRouter = require('./routes/commentsRoute');

const app = express();

// Database connection
const mongo = require('./database/mongo_connection');

// CORS configuration


// Middleware to set headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "http://localhost:9000");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

// Routes
app.use('/', authorizationRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/comments', commentRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: res.locals.error,
  });
});

module.exports = app;
