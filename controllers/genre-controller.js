const db = require("../db/database");

const renderAllGenrePage = async (req, res) => {
  const genres = await db.getAllGenresASC();
  res.render("all-genres", { genres: genres });
};

const renderMoviesOfGenrePage = async (req, res) => {
  const genreId = Number(req.params.id);
  const genre = await db.getGenre(genreId);
  const movies = await db.getMoviesOfGenre(genreId);
  res.render("movies-of-genre", { movies: movies, genre: genre });
};

const renderAddGenreDialog = async (req, res) => {
  const dialog = document.querySelector("#add-genre-dialog");
  dialog.showModal();
};

const addGenre = async (req, res) => {
  const { name } = req.body;
  await db.insertGenre(name);
  const genres = await db.getAllGenresASC();
  res.redirect("/genres");
};

const deleteGenre = async (req, res) => {
  const genreId = Number(req.params.id);
  await db.deleteGenre(genreId);
  res.redirect("/genres");
};

const editGenre = async (req, res) => {
  const genreId = Number(req.params.id);
  const { name } = req.body;
  await db.updateGenre(genreId, name);
  res.redirect("/genres");
};

module.exports = {
  renderAllGenrePage,
  renderMoviesOfGenrePage,
  addGenre,
  deleteGenre,
  editGenre,
};
