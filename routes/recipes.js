const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

router.get('/', (req, res) => {
    db.query('SELECT * FROM recipes', (err, recipes) => {
        if (err) throw err;
        const categorizedRecipes = {
            Beef: recipes.filter(recipe => recipe.protein_type.toLowerCase() === 'beef'),
            Chicken: recipes.filter(recipe => recipe.protein_type.toLowerCase() === 'chicken'),
            Vegetarian: recipes.filter(recipe => recipe.protein_type.toLowerCase() === 'vegetarian')
        };
        res.render('recipes', { categorizedRecipes });
    });
});

router.get('/:id', (req, res) => {
    const recipeId = req.params.id;
    db.query('SELECT * FROM recipes WHERE id = ?', [recipeId], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(404).send('Recipe not found');
        }
        const recipe = results[0];
        const ingredientIds = recipe.ingredient_ids.split(',').map(id => id.trim());
        db.query('SELECT * FROM ingredients WHERE id IN (?)', [ingredientIds], (err, ingredients) => {
            if (err) throw err;
            res.render('recipe', { recipe, ingredients });
        });
    });
});

module.exports = router;
