module.exports = function(request, response, next) {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const { name, price, capacity, description, size } = request.body;
  if (typeof name !== 'string' || typeof description !== 'string') {
    return response.status(400).send({
      message: 'Name or Description is not a string'
    });
  }
  if (price < 0 || capacity < 0 || size < 0) {
    return response.status(400).send({
      message: 'Price, Capacity or Size is not a number'
    });
  }
  next();
};
