const express = require('express');
const { getPosts, getPostById, deletePostById, updatePost, createPost } = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter
    .route('/')
    .get(getPosts)
    .post(createPost)

postRouter
    .route('/:id')
    .get(getPostById)
    .delete(deletePostById)
    .patch(updatePost)

module.exports = postRouter;