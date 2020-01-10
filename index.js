const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

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

// app.use('/client', routes);

// *************************************************************** //
//                    Serving Build File                       //  

app.use(express.static(path.join(__dirname, './client')));
app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname = './client/index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port 3001');
}); 