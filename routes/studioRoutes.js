const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');


router.get('/',studioController.renderStudioPage);

router.get('/:studioName',()=>{
    //Show specific studio
})

router.post('/new',()=>{
    //Add new studio
})

router.delete('/remove',()=>{
    //Remove studio
})

module.exports = {router};