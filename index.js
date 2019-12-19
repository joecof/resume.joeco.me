const express = require('express');

// Constants
const PORT = 3000;
const HOST = 172.31.33.54;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(process.env.PORT || PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);