module.exports = function(request, response, next) {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const { pseudo, comment } = request.body;
  if (typeof pseudo !== 'string' || typeof comment !== 'string') {
    return response.status(400).send({
      message: 'pseudo or comment is not a string'
    });
  }
  next();
};
