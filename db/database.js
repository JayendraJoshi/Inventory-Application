const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getAllGenresASC = async () => {
  const { rows } = await pool.query(`SELECT * FROM genres ORDER BY name ASC`);
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

const insertMovie = async (genreId, studioId, name, description) => {
  const query = `INSERT INTO movies (name,description,genre_id,studio_id) VALUES
  ($1,$2,$3,$4);`;
  await pool.query(query, [name, description, genreId, studioId]);
};

const deleteMovie = async (movieId) => {
  const query = `DELETE FROM movies WHERE id = $1;`;
  await pool.query(query, [movieId]);
};

const updateMovie = async (id, genreId, studioId, name, description) => {
  const query = `UPDATE movies 
  SET name = $1,
  description = $2,
  genre_id = $3,
  studio_id = $4 
  WHERE id = $5;`;
  await pool.query(query, [name, description, genreId, studioId, id]);
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

const insertStudio = async (name, description) => {
  const query = `INSERT INTO studios (name,description) 
  VALUES($1,$2);`;
  await pool.query(query, [name, description]);
};

const updateStudio = async (id, name, description) => {
  const query = `UPDATE studios SET name = $1,
  description = $2 
  WHERE id = $3;`;
  await pool.query(query, [name, description, id]);
};

const insertGenre = async (name) => {
  const query = `INSERT INTO genres (name)
    VALUES($1)
    ;`;
  await pool.query(query, [name]);
};

const updateGenre = async (id, name) => {
  const query = `UPDATE genres SET name = $1 WHERE id= $2;`;
  await pool.query(query, [name, id]);
};

module.exports = {
  pool,
  getAllGenresASC,
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
  insertStudio,
  updateStudio,
  updateGenre,
  insertMovie,
  updateMovie,
};
