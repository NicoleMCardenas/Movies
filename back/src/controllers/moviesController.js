const moviesService = require("../services/movieService");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error al obtener películas:", error.message);
      res.status(500).json({ message: "Error al obtener las películas", error: error.message });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;

      const newMovie = await moviesService.createMovie(
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      );

      res.status(201).json(newMovie);
    } catch (error) {
      console.error("Error al crear película:", error.message);
      res.status(400).json({ message: "Error al crear la película", error: error.message });
    }
  }
};