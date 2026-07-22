const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre-controller");

router.get("/", genreController.renderAllGenrePage);

router.get("/:id", genreController.renderMoviesOfGenrePage);

router.post("/new", genreController.addGenre);

router.post("/:id/delete", genreController.deleteGenre);

module.exports = { router };
