const AWS              = require('aws-sdk');

global.fetch           = require('node-fetch');
global.HTTP            = require('http-status-codes');
global.VEHICULOS_TABLE = process.env.VEHICULOS_TABLE;
global.dynamoDB        = new AWS.DynamoDB.DocumentClient();