const express = require('express');
const driver = require('../controllers/driver.controllers.js');
const controlInput = require('../middleware/controlInput.middleware');

const router = express.Router();

router.post('/', controlInput, v.create);

router.get('/', memory.findAll);


router.delete('/:driverId', driver.delete);

module.exports = router;
