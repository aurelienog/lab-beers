const express = require("express");
const router = express.Router();


const index = require("../controllers/index.controller");
const beers = require("../controllers/beers.controller");
const randomBeer = require("../controllers/random-beer.controller");

router.get('/', index.index);

router.get('/beers', beers.beers);

router.get('/random-beer', randomBeer.randomBeer);






module.exports = router;