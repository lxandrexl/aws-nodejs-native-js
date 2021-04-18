'use strict';

////////////////////////////////
const serverlessHttp = require('serverless-http');
const express        = require('express');
const app            = express();

///////////////////////////////
require('./config/global');

///////////////////////////////
app.use(express.json({string: false}));
app.use(express.urlencoded({extended: true}));

////////////////////////////////
const starWars = require('./routes/starwars.route');

////////////////////////////////
app.use('/api', starWars);

////////////////////////////////
module.exports.generic = serverlessHttp(app);