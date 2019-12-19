const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

var server = app.listen(process.env.PORT || 3000);
