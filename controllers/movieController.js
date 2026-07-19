const db = require("../db/database");

const renderMoviePage = async (req, res) => {
  const movies = await db.getAllMoviesASC();
  res.render("allMovies", { movies: movies });
};

const deleteMovie = async (req, res) => {
  await db.deleteSpecificMovie(req.params.id);
  const previousPage = req.get("Referrer");
  res.redirect(previousPage);
};

module.exports = { renderMoviePage, deleteMovie };
