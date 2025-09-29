const express = require('express');
const { getAll, getHotelById, createHotel, updateHotel, deleteHotelById } = require('../controllers/hotel.contoller');

const hotelRouter = express.Router();

hotelRouter
    .route('/')
    .get(getAll)
    .post(createHotel)

hotelRouter
    .route('/:id')
    .get(getHotelById)
    .patch(updateHotel)
    .delete(deleteHotelById);

module.exports = hotelRouter;