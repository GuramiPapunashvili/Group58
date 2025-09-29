const express = require('express');
const {
  getPostById,
  createPost,
} = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.get('/:id', getPostById);
postRouter.post('/', createPost);

module.exports = postRouter;