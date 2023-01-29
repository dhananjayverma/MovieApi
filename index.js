const express = require('express');
const connection = require('./config/db');
const moviesController = require('./controllers/movie.controllers')

const app = express();

app.use(express.json());
app.use("/movies", moviesController);

const PORT = 5000;

app.listen(PORT, () => {
    try {
        connection();
        console.log('listening on port ' + PORT);
    } catch (error) {
        console.log(error);
    }
})