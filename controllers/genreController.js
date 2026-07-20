const db = require("../db/database");

const renderAllGenrePage = async (req, res) => {
  const genres = await db.getAllGenres();
  res.render("all-genres", { genres: genres });
};

const renderMoviesOfGenrePage = async (req, res) => {
  const genreId = Number(req.params.id);
  const genre = await db.getGenre(genreId);
  const movies = await db.getMoviesOfGenre(genreId);
  res.render("movies-of-genre", { movies: movies, genre: genre[0] });
};

const renderAddGenrePage = async (req, res) => {
  res.render("add-genre");
};

const addGenre = async (req, res) => {
  const { name, description } = req.body;
  await db.insertGenre(name, description);
  const genres = await db.getAllGenres();
  res.redirect("/genres");
};

const deleteGenre = async (req, res) => {
  const genreId = Number(req.params.id);
  await db.deleteGenre(genreId);
  res.redirect("/genres");
};

module.exports = {
  renderAllGenrePage,
  renderMoviesOfGenrePage,
  addGenre,
  renderAddGenrePage,
  deleteGenre,
};
