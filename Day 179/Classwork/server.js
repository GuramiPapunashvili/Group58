const express = require('express');
const postRouter = require('./routes/post.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/posts', postRouter);
app.use(errorHandler);

app.listen(3000);