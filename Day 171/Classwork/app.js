const express = require('express');

const userRouter = require('./routers/userRouter/userRouter');

const postsRouter = require('./routers/postRouter/postRouter');

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/posts', postsRouter);

app.listen(3000, () => {
    console.log('The server is running on port 3000')
});