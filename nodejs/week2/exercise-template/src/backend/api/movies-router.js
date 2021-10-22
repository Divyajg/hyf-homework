const express = require("express");
const app = require("../app");
const router = express.Router();

const movies = require("../data/movies.json");

/* router.get("/", async(request, response) => {
    // console.log(movies);
    // console.log(request.isChromeBrowser);
    response.send({ data: movies });
}); */
//----------------------------------------------------------
function getMovieWithId() {
    const movie = movies.find(movie => movie.id === 32);
    return movie;
}
router.get("/32", async(request, response) => {
    response.send(getMovieWithId());
});
//------------------------------------------------------
router.get('/:id', function(req, res) {
    let id = parseInt(req.params.id, 10);
    console.log(id);
    let movie = movies.find(movie => movie.id === id);
    res.send({ data: movie });
});

//--------------------------------------------------

getMoviesInThePeriod = (beginYear, endYear, minRating) => {
        const moviesInThePeriod = movies.filter(movie => movie.year >= beginYear && movie.year <= endYear && movie.rating >= minRating);
        return moviesInThePeriod
    }
    // Please comment out the block from line 6 to line 9, to see the effect of below route!
router.get('/', async(request, response) => {
    const { beginYear, endYear, minRating } = request.query;
    console.log(beginYear, endYear, minRating);
    response.send(getMoviesInThePeriod(beginYear, endYear, minRating));
});
//-----------------------------------------------------
//middleware check

module.exports = router;