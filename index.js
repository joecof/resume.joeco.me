const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.send('Hello World');
})

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port 3001');
}); 