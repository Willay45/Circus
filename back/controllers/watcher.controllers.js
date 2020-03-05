const Watcher = require('../models/watcher.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const watcher = new Watcher({
    snap: request.body.snap ? request.body.snap : null
  });
  Watcher.create(watcher, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the watcher.'
      });
    }
    return response.send(data);
  });
};

exports.findAll = (request, response) => {
  Watcher.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving watcher.'
      });
    }
    return response.status(200).send(data);
  });
};

exports.delete = (request, response) => {
  Watcher.delete(request.params.watcherId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found watcher with id ${request.params.watcherId}.`
        });
      } else {
        response.status(500).send({
          message: `Could not delete watcher with id ${request.params.watcherId}`
        });
      }
    } else {
      response.send({ message: `watcher was deleted successfully!` });
    }
  });
};
