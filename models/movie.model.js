const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const moviesSchema = new mongoose.Schema(
    {
        "title" : {type : String, required : true},
        "year" : {type : Number, required : true},
        "rating" : {type : Number, required : true},
        "genre" : [{type : String, required : false}]
    },
    {
        versionKey : false,
        timestamps : true
    }
)

const movies = mongoose.model('Movies', moviesSchema);

module.exports = movies;
