const express = require("express");
const router = express.Router();
const studioController = require("../controllers/studioController");

router.get("/", studioController.renderStudioPage);

router.get("/:studioName", () => {
  //Show specific studio
});

router.post("/new", () => {
  //Add new studio
});

router.post("/:id/delete", studioController.deleteStudio);

module.exports = { router };
