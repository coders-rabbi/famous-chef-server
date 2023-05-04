const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/famous-chef.json');
const recipes = require('./data/recipies.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Famous Chef is Running!')
});

app.get('/famous-chef', (req, res) => {
    res.send(chef);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.listen(port, ()=>{
    console.log(`Famous API is running on port: ${port}`);
})