const express = require('express');
const {postPlayed} = require('../controllers/Played');

const Router = express.Router();

Router.post('/played',postPlayed);


module.exports = Router;