const express = require('express');
const morgan = require('morgan');
const hotelRouter = require('./routers/hotel.router');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/hotels', hotelRouter);

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.listen(process.env.PORT, () => {
    console.log('The server is running')
});