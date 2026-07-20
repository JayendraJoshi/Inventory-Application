const express = require("express");
const app = express();
const path = require("node:path");
const { router: studioRouter } = require("./routes/studio-routes");
const { router: genreRouter } = require("./routes/genre-routes");
const { router: movieRouter } = require("./routes/movie-routes");
const { renderIndexPage } = require("./controllers/indexController");
const PORT = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
app.get("/", renderIndexPage);
app.use("/genres", genreRouter);
app.use("/movies", movieRouter);
app.use("/studios", studioRouter);
