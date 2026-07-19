const db = require("../db/database");

const renderIndexPage = async (req, res) => {
  const genres = await db.getAllGenres();
  res.render("allGenres", { genres: genres });
};

const renderGenrePage = async (req, res) => {
  const genreId = Number(req.params.id);
  const genre = await db.getSpecificGenre(genreId);
  console.log(genre);
  const movies = await db.getMoviesOfSpecificGenre(genreId);
  res.render("moviesOfGenre", { movies: movies, genre: genre[0] });
};

const renderAddGenrePage = async (req, res) => {
  res.render("addGenre");
};

const addGenre = async (req, res) => {
  const { name, description } = req.body;
  await db.insertGenre(name, description);
  const genres = await db.getAllGenres();
  res.render("allGenres", { genres: genres });
};

module.exports = {
  renderIndexPage,
  renderGenrePage,
  addGenre,
  renderAddGenrePage,
};
