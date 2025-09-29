const express = require('express');
const postRouter = require('./routers/post.router');

const app = express();

app.use(express.json());

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});