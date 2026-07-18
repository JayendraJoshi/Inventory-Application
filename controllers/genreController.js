const db = require('../db/database');

const renderIndexPage = async(req,res)=>{
    const genres = await db.getAllGenres();
    res.render("index",{genres:genres});
}

const renderGenrePage=async(req,res)=>{
    const genreId = Number(req.params.genreId);
    const genre = await db.getSpecificGenre(genreId);
    const movies = await db.getMoviesOfSpecificGenre(genreId);
    res.render("moviesOfGenre",{movies:movies,genre:genre});
    console.log(movies);
}

module.exports = {renderIndexPage, renderGenrePage};