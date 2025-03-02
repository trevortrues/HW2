const express = require('express');
const app = express();
const path = require('path');
const recipesRoutes = require('./routes/recipes');
const indexRoutes = require('./routes/index');
const addRecipeRoutes = require('./routes/add-recipe');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoutes);
app.use('/recipes', recipesRoutes);
app.use('/add-recipe', addRecipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
