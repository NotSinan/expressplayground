const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    year: Number,
    countries: [String]
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie;