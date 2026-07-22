const db = require("../db/database");

const renderAllMoviesPage = async (req, res) => {
  const movies = await db.getAllMoviesASC();
  res.render("all-movies", { movies: movies });
};

const deleteMovie = async (req, res) => {
  await db.deleteMovie(req.params.id);
  const previousPage = req.get("Referrer");
  res.redirect(previousPage);
};

const renderMoviePage = async (req, res) => {
  const movie = await db.getMovie(req.params.id);
  const studio = await db.getStudio(movie.studio_id);
  const genre = await db.getGenre(movie.genre_id);
  res.render("movie", { movie: movie, studio: studio, genre: genre });
};

module.exports = { renderAllMoviesPage, deleteMovie, renderMoviePage };
