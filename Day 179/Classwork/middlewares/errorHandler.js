const ApiError = require('../errors/ApiError');

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(status).json({
    success: false,
    message,
    details: err.details || null,
  });
};

module.exports = errorHandler;