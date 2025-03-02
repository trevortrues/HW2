const db = require('./db');

const getAllRecipes = (callback) => {
    db.query('SELECT * FROM recipes', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const addRecipe = (title, description, protein_type, ingredient_ids, callback) => {
    db.query(
        'INSERT INTO recipes (title, description, protein_type, ingredient_ids) VALUES (?, ?, ?, ?)',
        [title, description, protein_type, ingredient_ids],
        (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        }
    );
};

module.exports = { getAllRecipes, addRecipe };
