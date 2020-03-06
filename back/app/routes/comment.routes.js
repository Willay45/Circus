const express = require('express');
const message = require('../controllers/comment.controllers.js');
const controlInput = require('../middleware/controlInput.comment.middleware');

const router = express.Router();

router.post('/', message.create);

router.get('/', message.findAll);

module.exports = router;
