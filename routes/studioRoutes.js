const express = require('express');
const router = express.Router();

router.get('/',()=>{
    //Show all studios
})

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