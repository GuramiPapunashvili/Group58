const express = require('express');
const postRouter = require('./postRouter/postRouter');

const app = express();

app.use('/posts', express.json());

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});