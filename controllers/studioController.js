const db = require('../db/database');
const studioController = require('../controllers/studioController');

const renderStudioPage = async(req,res)=>{
    const studios = await db.getAllStudiosASC();
    res.render("allStudios",{studios:studios});
}

module.exports={renderStudioPage};