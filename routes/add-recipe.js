const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

router.get('/', (req, res) => {
    db.query('SELECT * FROM ingredients', (err, ingredients) => {
        if (err) throw err;
        res.render('add-recipe', { ingredients });
    });
});

router.post('/', (req, res) => {
    const { title, description, protein_type, ingredient_ids } = req.body;
    db.query(
        'INSERT INTO recipes (title, description, protein_type, ingredient_ids) VALUES (?, ?, ?, ?)',
        [title, description, protein_type, ingredient_ids],
        (err) => {
            if (err) throw err;
            res.redirect('/recipes');
        }
    );
});

module.exports = router;
