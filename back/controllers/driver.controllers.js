const Driver = require('../models/driver.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content con not be empty!'
    });
  }
  const driver = new Driver({
    pseudo: request.body.pseudo ? request.body.pseudo : null,
    car: request.body.car ? request.body.car : null,
    snap: request.body.snap ? request.body.snap : null
  });
  Driver.create(driver, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the drive.'
      });
    }
    return response.send(data);
  });
};

exports.findAll = (request, response) => {
  Driver.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving driver.'
      });
    }
    return response.status(200).send(data);
  });
};

exports.delete = (request, response) => {
  Driver.delete(request.params.driverId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found memory with id ${request.params.driverId}.`
        });
      } else {
        response.status(500).send({
          message: `Could not delete memory with id ${request.params.driverId}`
        });
      }
    } else {
      response.send({ message: `driver was deleted successfully!` });
    }
  });
};
