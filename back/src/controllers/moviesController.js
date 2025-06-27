const moviesService = require("../services/movieService");

module.exports = {
    getMovies: (req,res) => {
        const movies = moviesService.getmoviesService();
        res.json(movies);
    },
};
