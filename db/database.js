const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
});

const getAllGenres = async()=>{
    const {rows} = await pool.query(`SELECT * FROM genres`);
    return rows;
}

module.exports = {pool,getAllGenres};