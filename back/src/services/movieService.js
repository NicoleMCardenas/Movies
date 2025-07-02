const Movie = require ("../models/Movie");
module.exports = {
  getMovies: async () => {
    const movies = await Movie.find ();
    return movies;
  },

  createMovie: async (title, year, director, duration, genre, rate, poster) => {
  const newMovie = new Movie({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster
  });

  const savedMovie = await newMovie.save();
  return savedMovie;
}
};