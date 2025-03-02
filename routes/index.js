const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

router.get('/', (req, res) => {
    res.render('index', {
        favoriteFood: "",
        cookingExperience: ""
    });
});

module.exports = router;
