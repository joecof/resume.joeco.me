const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// **************************************************************************** //
//                    Gets Around CORS ISSUE                                    // 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('preflightContinue', 'false');
  next();
})

// app.use('/', (req, res, next) => {
//   res.send('Hello World');
// })

// **************************************************************************** //

// *************************************************************** //
//                    Serving Build File                       //  

  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = './client/build/index.html'));
  });

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port 3001');
}); 