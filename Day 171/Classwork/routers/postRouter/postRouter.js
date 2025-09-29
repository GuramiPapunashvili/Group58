const express = require('express');

const postsRouter = express.Router();

const posts = [];

postsRouter.get('/', (req, res) => {
    res.json(posts);
});

postsRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const post = posts.find(post => post.id === parseInt(id));

    if(!post){
        return res.status(404).json({
            status: "Fail",
            message: "Post not found"
        })
    }

    res.json(post);
});

postsRouter.post('/', (req, res) => {
    const { title, description, author } = req.body;

    if(!title || !description || !author){
        return res.status(400).json({
            status: "Fail",
            message: "All fields are required title, description, author"
        })
    }

    const newPost = {
        title,
        description,
        author,
        id: Date.now()
    }

    posts.push(newPost);

    res.status(201).json(newPost);
});

postsRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;

    const index = posts.findIndex(post => post.id === id * 1);

    if(index === -1){
        return res.status(404).json({
            status: "Fail",
            message: "Post not found"
        })
    }

    if(title !== undefined){
        posts[index].title = title
    }

    if(description !== undefined){
        posts[index].description = description
    }

    if(author !== undefined){
        posts[index].author = author
    }

    res.status(200).json(posts[index]);
});

postsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    const index = posts.findIndex(post => post.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({
            status: "Fail",
            message: "Post not found by id"
        })
    }

    posts.splice(index, 1);

    res.status(204).send();
});

module.exports = postsRouter;