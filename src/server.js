import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const express = require('express');
const app = express();

app.use(compression({ threshold: 0 }));
app.use(		sirv('static', { dev }));
app.use(sapper.middleware());

app.listen(PORT || 3000);
