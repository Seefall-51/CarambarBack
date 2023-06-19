const express = require("express");
const router = express.Router();
const controller = require("../controllers/index")

router.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//retourne la liste de tout les blagues
router.get('/allJokes', controller.allJokes);

// cherche une blague selon un param groupe
router.get('/findJoke/:groupe', controller.findJoke);

//retourne une blague au hasard
router.get('/randomJoke', controller.randomJoke);

module.exports = router