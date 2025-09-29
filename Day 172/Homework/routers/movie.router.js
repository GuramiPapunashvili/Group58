const express = require('express');
const { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');

const movieRouter = express.Router();

movieRouter
    .route('/')
    .get(getMovies)
    .post(createMovie)

movieRouter
    .route('/:id')
    .get(getMovieById)
    .patch(updateMovie)
    .delete(deleteMovie)


module.exports = movieRouter;