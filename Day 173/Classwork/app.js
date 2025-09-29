const express = require('express');
const postRouter = require('./routers/post.router');

const app = express();


app.use((req, res, next) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        if(body){
            req.body = JSON.parse(body);
        }

        next();
    });
});

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});