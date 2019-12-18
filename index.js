const express = require('express');

// Constants
const PORT = 3000;
const HOST = '3.137.50.204';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world, testing additional changes\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);