const Category = require('../models/category.model.js');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const categoryList = await Category.find();
    if(!categoryList) {
        res.status(500).json({success:fale})
    }
    res.send(categoryList);
})

module.exports = router;

