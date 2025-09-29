const ApiError = require('../errors/ApiError');

exports.getPostById = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    return next(new ApiError(400, 'Invalid post id', { param: 'id' }));
  }

  const post = null;
  if (!post) {
    return next(new ApiError(404, 'Post not found'));
  }

  return res.json({ success: true, data: post });
};

exports.createPost = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) {
      throw new ApiError(422, 'Title is required');
    }

    const newPost = { id: 1, title };
    return res.json({ success: true, data: newPost });
  } catch (error) {
    next(error);
  }
};