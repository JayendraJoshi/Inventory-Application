const db = require("../db/database");
const { body, validationResult } = require("express-validator");

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

const validateGenreName = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty")
    .isAlpha()
    .withMessage("Name must only contain letters.")
    .isLength({
      max: 20,
    })
    .withMessage("Name can not be longer than 20 characters"),
];

const addGenre = [
  validateGenreName,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name } = req.body;
    await db.insertGenre(name);
    return res.status(201).json({
      success: true,
    });
  },
];

const deleteGenre = async (req, res) => {
  const genreId = Number(req.params.id);
  await db.deleteGenre(genreId);
  res.redirect("/genres");
};

const editGenre = [
  validateGenreName,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const genreId = Number(req.params.id);
    const { name } = req.body;
    await db.updateGenre(genreId, name);
    return res.status(200).json({
      success: true,
    });
  },
];

module.exports = {
  renderAllGenrePage,
  renderMoviesOfGenrePage,
  addGenre,
  deleteGenre,
  editGenre,
};
