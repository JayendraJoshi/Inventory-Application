const express = require('express');
const router = express.Router();

router.get('/',()=>{
    //Show all films
})

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