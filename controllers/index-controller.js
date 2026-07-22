const db = require("../db/database");

const renderIndexPage = async (req, res) => {
  const genres = await db.getAllGenresASC();
  res.render("index", { genres: genres });
};

module.exports = { renderIndexPage };
