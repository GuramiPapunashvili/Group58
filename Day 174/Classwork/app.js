const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const postRouter = require('./routers/post.router');

const app = express();

app.use(express.json());



app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${res.statusCode} ${Date.now()}`);

    next();
});


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/posts', postRouter);

app.listen(process.env.PORT, () => {
    console.log('The server is running')
});