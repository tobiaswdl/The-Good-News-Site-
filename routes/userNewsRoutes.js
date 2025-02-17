const express = require('express');
const router = express.Router();
const path = require('path');
const userNewsController = require('../controllers/userNewsController');



// Get all user News 
router.get('/', userNewsController.getAllBlocks);

// Get single block by ID 
router.get('/:id', userNewsController.getBlockById);

// POst new Block 
router.post('/', userNewsController.createBlock);


module.exports = router;