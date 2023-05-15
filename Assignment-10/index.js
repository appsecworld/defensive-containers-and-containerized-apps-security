const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to AppSecWorld');
});

app.listen(8080, () => {
  console.log('Application is Started');
});
