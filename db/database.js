const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
});

const getAllGenres = async()=>{
    const {rows} = await pool.query(`SELECT * FROM genres`);
    return rows;
}

const getSpecificGenre = async(genreId)=>{
    const {rows} = await pool.query(`SELECT * FROM genres WHERE name = $1`,[genreId]);
    return rows;
}

const getMoviesOfSpecificGenre = async(genreId)=>{
    const query = 'SELECT * FROM movies WHERE genre_id = $1;';
    const {rows} = await pool.query(query,[genreId]);
    return rows;
}

const getAllMoviesASC = async()=>{
    const {rows} = await pool.query(`SELECT * FROM movies ORDER BY name ASC;`);
    return rows;
}

const getAllStudiosASC = async()=>{
    const {rows} = await pool.query(`SELECT * FROM studios ORDER BY name ASC;`);
    return rows;
}

module.exports = {pool,getAllGenres, getSpecificGenre, getMoviesOfSpecificGenre, getAllMoviesASC, getAllStudiosASC};