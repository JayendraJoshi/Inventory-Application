const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/',genreController.renderIndexPage);

router.get('/:genreId',genreController.renderGenrePage);

router.post('/new',()=>{
    //Add new genre
})

router.delete('/remove',()=>{
    //Remove genre
})

module.exports = {router};