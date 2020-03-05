const express = require('express');

const driver = require('./driver.routes');
const watcher = require('./watcher.routes');

const router = express.Router();

router.use('/drivers', driver);
router.use('/watchers', watcher);

module.exports = router;