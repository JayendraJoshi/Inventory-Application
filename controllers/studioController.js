const db = require("../db/database");
const studioController = require("../controllers/studioController");

const renderStudioPage = async (req, res) => {
  const studios = await db.getAllStudiosASC();
  res.render("allStudios", { studios: studios });
};

const deleteStudio = async (req, res) => {
  await db.deleteSpecificStudio(req.params.id);
  const previousPage = req.get("Referrer");
  res.redirect(previousPage);
};

module.exports = { renderStudioPage, deleteStudio };
