const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/',movieController.renderMoviePage);

router.get('/:movieName',()=>{
    //Show specific films
})

router.post('/new',()=>{
    //Add new film
})

router.delete('/remove',()=>{
    //Remove film
})

module.exports = {router};