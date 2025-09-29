const express = require('express');
const userRouter = require('./routes/user.routes');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.use(globalErrorHandler);

module.exports = app;