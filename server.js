'use strict';

const { join } = require('path');
const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static(join(__dirname, 'build')));

app.get('*', (req, res) => {
  app.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
