const db = require('../db/database');

const renderMoviePage = async(req,res)=>{
    const movies = await db.getAllMoviesASC();
    res.render("allMovies",{movies:movies});
}

module.exports={renderMoviePage};