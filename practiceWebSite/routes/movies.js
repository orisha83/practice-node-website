var express = require('express');
var router = express.Router();
const moviesBL = require('../BL/moviesBL')

/* GET users listing. */
router.get('/', async function(req, res, next) 
{
  let allMovies = await moviesBL.getAllMovies()
  res.render('movies', { allMovies :allMovies });
});

module.exports = router;
