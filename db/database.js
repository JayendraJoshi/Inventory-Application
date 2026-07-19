const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getAllGenres = async () => {
  const { rows } = await pool.query(`SELECT * FROM genres`);
  return rows;
};

const getSpecificGenre = async (genreId) => {
  const { rows } = await pool.query(`SELECT * FROM genres WHERE id = $1`, [
    genreId,
  ]);
  return rows;
};

const getMoviesOfSpecificGenre = async (genreId) => {
  const query = "SELECT * FROM movies WHERE genre_id = $1;";
  const { rows } = await pool.query(query, [genreId]);
  return rows;
};

const getAllMoviesASC = async () => {
  const { rows } = await pool.query(`SELECT * FROM movies ORDER BY name ASC;`);
  return rows;
};

const deleteSpecificMovie = async (movieId) => {
  const query = `DELETE FROM movies WHERE id = $1;`;
  await pool.query(query, [movieId]);
};

const getAllStudiosASC = async () => {
  const { rows } = await pool.query(`SELECT * FROM studios ORDER BY name ASC;`);
  return rows;
};

const deleteSpecificStudio = async (studioId) => {
  const query = `DELETE FROM studios WHERE id = $1;`;
  await pool.query(query, [studioId]);
};

const insertGenre = async (name, description) => {
  const query = `INSERT INTO genres (name,description)
    VALUES($1,$2)
    ;`;
  await pool.query(query, [name, description]);
};

module.exports = {
  pool,
  getAllGenres,
  getSpecificGenre,
  getMoviesOfSpecificGenre,
  getAllMoviesASC,
  getAllStudiosASC,
  insertGenre,
  deleteSpecificMovie,
  deleteSpecificStudio,
};
