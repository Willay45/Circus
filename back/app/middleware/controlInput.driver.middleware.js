module.exports = function(request, response, next) {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const { pseudo, car, snap } = request.body;
  if (typeof pseudo !== 'string' || typeof car !== 'string' || typeof snap !== 'string') {
    return response.status(400).send({
      message: 'Name or Description is not a string'
    });
  }
  next();
};
