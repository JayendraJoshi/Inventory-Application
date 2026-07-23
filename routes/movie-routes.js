const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie-controller");

router.get("/", movieController.renderAllMoviesPage);

router.get("/new", movieController.renderAddMoviePage);

router.get("/:id", movieController.renderMoviePage);

router.get("/:id/edit", movieController.renderUpdateMoviePage);

router.post("/new", movieController.addMovie);

router.post("/:id/delete", movieController.deleteMovie);

router.post("/:id/edit", movieController.updateMovie);

module.exports = { router };
