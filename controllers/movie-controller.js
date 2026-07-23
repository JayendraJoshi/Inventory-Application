const db = require("../db/database");

const renderAllMoviesPage = async (req, res) => {
  const movies = await db.getAllMoviesASC();
  console.log(movies);
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

const renderAddMoviePage = async (req, res) => {
  const genres = await db.getAllGenresASC();
  const studios = await db.getAllStudiosASC();
  res.render("add-movie", { genres: genres, studios: studios });
};

const addMovie = async (req, res) => {
  const { name, description, genre_id, studio_id } = req.body;
  const studioId = studio_id || null;
  await db.insertMovie(genre_id, studioId, name, description);
  const movies = await db.getAllMoviesASC();
  res.redirect("/movies");
};

const renderUpdateMoviePage = async (req, res) => {
  const movieId = req.params.id;
  const genres = await db.getAllGenresASC();
  const studios = await db.getAllStudiosASC();
  const movie = await db.getMovie(movieId);
  res.render("edit-movie", { genres: genres, studios: studios, movie: movie });
};

const updateMovie = async (req, res) => {
  const { name, description, genre_id, studio_id } = req.body;
  const studioId = studio_id || null;
  const movieId = req.params.id;
  await db.updateMovie(movieId, genre_id, studioId, name, description);
  res.redirect("/movies");
};

module.exports = {
  renderAllMoviesPage,
  deleteMovie,
  renderMoviePage,
  renderAddMoviePage,
  addMovie,
  updateMovie,
  renderUpdateMoviePage,
};
