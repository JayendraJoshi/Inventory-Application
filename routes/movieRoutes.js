const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.renderMoviePage);

router.get("/:name", () => {
  //Show specific films
});

router.post("/new", () => {
  //Add new film
});

router.post("/:id/delete", movieController.deleteMovie);

module.exports = { router };
