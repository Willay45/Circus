const express = require('express');
const watcher = require('../controllers/watcher.controllers.js');
const controlInput = require('../middleware/controlInput.watcher.middleware');

const router = express.Router();

router.post('/', controlInput, watcher.create);

router.get('/', watcher.findAll);

router.delete('/:watcherId', watcher.delete);

module.exports = router;
