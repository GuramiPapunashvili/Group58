const AppError = require('../utils/AppError');

exports.getUser = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new AppError('User ID is required', 400));
  }

  const user = null; 

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.json({ success: true, data: user });
};