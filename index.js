const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/api', (req, res) => {
  res.send("we are in api route");
})

app.get('/controller', (req, res) => {
  res.send("testing fast development");
})

app.listen(process.env.PORT || 3000);
