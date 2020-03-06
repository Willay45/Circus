const Message = require('../models/comment.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const message = new Message({
    pseudo: request.body.pseudo ? request.body.pseudo : null,
    comment: request.body.comment ? request.body.comment : null,
  });
  Message.create(message, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the comment.'
      });
    }
    return response.send(data);
  });
};

exports.findAll = (request, response) => {
  Message.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving comment.'
      });
    }
    return response.status(200).send(data);
  });
};
