require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./app/routes/');

// Create app
const app = express();

// Parse requests of content-type: application/json
app.use(bodyParser.json());
// cors
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Use API routes
app.use('/api', api);

// Set port, listen for requests
app.listen(process.env.PORT || 8080, () =>
  console.log(`Server is running on port ${process.env.PORT || 8080}.`)
);