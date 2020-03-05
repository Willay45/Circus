const express = require('express');

const driver = require('./driver.routes.js');
const watcher = require('./watcher.routes.js');

const router = express.Router();

router.use('/drivers', driver);
router.use('/watchers', watcher);

module.exports = router;