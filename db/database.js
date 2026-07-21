const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getAllGenres = async () => {
  const { rows } = await pool.query(`SELECT * FROM genres`);
  return rows;
};

const getGenre = async (genreId) => {
  const { rows } = await pool.query(`SELECT * FROM genres WHERE id = $1`, [
    genreId,
  ]);
  return rows;
};

const deleteGenre = async (genreId) => {
  await pool.query(`DELETE FROM genres WHERE id = $1;`, [genreId]);
};

const getMoviesOfGenre = async (genreId) => {
  const query = "SELECT * FROM movies WHERE genre_id = $1;";
  const { rows } = await pool.query(query, [genreId]);
  return rows;
};

const getAllMoviesASC = async () => {
  const { rows } = await pool.query(`SELECT * FROM movies ORDER BY name ASC;`);
  return rows;
};

const getMovie = async (movieId) => {
  const { rows } = await pool.query(`SELECT * FROM movies WHERE id = $1;`, [
    movieId,
  ]);
  return rows[0];
};

const deleteMovie = async (movieId) => {
  const query = `DELETE FROM movies WHERE id = $1;`;
  await pool.query(query, [movieId]);
};

const getAllStudiosASC = async () => {
  const { rows } = await pool.query(`SELECT * FROM studios ORDER BY name ASC;`);
  return rows;
};

const getStudio = async (studioId) => {
  const { rows } = await pool.query(`SELECT * FROM studios WHERE id = $1`, [
    studioId,
  ]);
  return rows[0];
};

const deleteStudio = async (studioId) => {
  const query = `DELETE FROM studios WHERE id = $1;`;
  await pool.query(query, [studioId]);
};

const insertGenre = async (name) => {
  const query = `INSERT INTO genres (name)
    VALUES($1)
    ;`;
  await pool.query(query, [name]);
};

module.exports = {
  pool,
  getAllGenres,
  getGenre,
  getMoviesOfGenre,
  getAllMoviesASC,
  getAllStudiosASC,
  insertGenre,
  deleteMovie,
  deleteStudio,
  deleteGenre,
  getMovie,
  getStudio,
};
