const db = require('./db');

const getAllIngredients = (callback) => {
    db.query('SELECT * FROM ingredients', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

module.exports = { getAllIngredients };