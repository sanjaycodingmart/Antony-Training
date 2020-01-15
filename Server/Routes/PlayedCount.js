const express = require('express');
const {postPlayedCount} = require('../controllers/PlayedCount');

const Router = express.Router();

Router.post('/playedcount',postPlayedCount);


module.exports = Router;