const express = require('express');
const movieRouter = require('./routers/movie.router');

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});