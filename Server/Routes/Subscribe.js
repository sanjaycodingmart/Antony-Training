const express = require('express');
const {getSubscribe, postSubscribe} = require('../controllers/Subscribe');

const Router = express.Router();

Router.post('/subscribe',postSubscribe);

module.exports = Router;