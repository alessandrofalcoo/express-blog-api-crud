const express = require('express');
const router = express.Router()
const postsController = require('../controllers/posts_controller')
console.log(postsController);

// Index
router.get('/', (req,res)=>{
    res.send('lista dei post')
})

// Show
router.get('/:slug', )



module.exports = router