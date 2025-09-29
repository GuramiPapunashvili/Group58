const express = require('express');

const postRouter = express.Router();

const posts = [];

postRouter.get('/', (req, res) => {
    res.json(posts);
});

postRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const post = posts.find(post => post.id === id * 1);

    if(!post){
        return res.status(404).json({
            status: "Fail",
            message: "Post can't be found"
        })
    }

    res.status(200).json(post);
});

postRouter.post('/', (req, res) => {
    const { title, author, description, comments } = req.body;

    if(!title || !author || !description || !comments){
        return res.status(400).json({
            status: "Fail",
            message: "All fields are required"
        })
    }

    const newPost = {
        title,
        author,
        description,
        comments,
        id: Date.now()
    }

    posts.push(newPost);

    res.status(201).json(posts);
});

postRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, comments } = req.body;

    const index = posts.findIndex(post => post.id === id * 1);

    if(index === -1){
        return res.status(404).json({
            status: "Fail",
            message: "Post can't be found"
        })
    }

    if(title !== undefined){
        posts[index].title = title
    }

    if(description !== undefined){
        posts[index].description = description
    }

    if(comments !== undefined){
        posts[index].comments = comments
    }

    res.status(200).json(posts[index]);
});

postRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    const index = posts.findIndex(post => post.id === id * 1);

    if(index === -1){
        return res.status(404).json({
            status: "Fail",
            message: "Post can't be found"
        })
    }

    posts.splice(index, 1);

    res.status(204).send();
});

module.exports = postRouter;