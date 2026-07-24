const db = require("../db/database");
const { body, validationResult } = require("express-validator");

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
  console.log(genre);
  res.render("movie", { movie: movie, studio: studio, genre: genre });
};

const renderAddMoviePage = async (req, res) => {
  const genres = await db.getAllGenresASC();
  const studios = await db.getAllStudiosASC();
  res.render("add-movie", { genres: genres, studios: studios });
};

const validateMovie = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty")
    .isLength({
      max: 30,
    })
    .withMessage("Name can not be longer than 30 characters"),
  body("description")
    .trim()
    .optional({ values: "falsy" })
    .isLength({
      max: 1000,
    })
    .withMessage("Description can't be longer than 1000 characters"),
  body("image_url")
    .trim()
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Needs to be an URL"),
];

const addMovie = [
  validateMovie,
  async (req, res) => {
    const errors = validationResult(req);
    const { name, description, genre_id, studio_id, image_url } = req.body;
    if (!errors.isEmpty()) {
      const genres = await db.getAllGenresASC();
      const studios = await db.getAllStudiosASC();
      return res.status(400).render("add-movie", {
        errors: errors.array(),
        genres: genres,
        studios: studios,
      });
    }
    const studioId = studio_id || null;
    const imageUrl = image_url || null;
    await db.insertMovie(genre_id, studioId, name, description, imageUrl);
    const movies = await db.getAllMoviesASC();
    res.redirect("/movies");
  },
];

const renderUpdateMoviePage = async (req, res) => {
  const movieId = req.params.id;
  const genres = await db.getAllGenresASC();
  const studios = await db.getAllStudiosASC();
  const movie = await db.getMovie(movieId);
  res.render("edit-movie", { genres: genres, studios: studios, movie: movie });
};

const updateMovie = [
  validateMovie,
  async (req, res) => {
    const movieId = req.params.id;
    const { name, description, genre_id, studio_id } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const genres = await db.getAllGenresASC();
      const studios = await db.getAllStudiosASC();
      const movie = await db.getMovie(movieId);
      movie.name = name;
      movie.description = description;
      movie.studio_id = studio_id;
      movie.genre_id = genre_id;
      return res.status(400).render("edit-movie", {
        errors: errors.array(),
        genres: genres,
        studios: studios,
        movie: movie,
      });
    }
    const studioId = studio_id || null;
    await db.updateMovie(movieId, genre_id, studioId, name, description);
    res.redirect("/movies");
  },
];

module.exports = {
  renderAllMoviesPage,
  deleteMovie,
  renderMoviePage,
  renderAddMoviePage,
  addMovie,
  updateMovie,
  renderUpdateMoviePage,
};
