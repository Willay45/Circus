const express = require('express');
const driver = require('../controllers/driver.controllers.js');
const controlInput = require('../middleware/controlInput.driver.middleware');

const router = express.Router();

router.post('/', controlInput, driver.create);

router.get('/', driver.findAll);

router.delete('/:driverId', driver.delete);

module.exports = router;
