const express = require('express');

const driver = require('./driver.routes.js');
const watcher = require('./watcher.routes.js');
const comment = require('./comment.routes.js');

const router = express.Router();

router.use('/drivers', driver);
router.use('/watchers', watcher);
router.use('/messages', comment);

module.exports = router;