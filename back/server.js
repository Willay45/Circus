require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./app/routes/index.js');

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.use('/api', api);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server is running on port ${process.env.PORT || 8080}.`)
);