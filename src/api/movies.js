const express = require('express');
const router = express.Router()
const Movie = require('../models/movies')

router.get('/movies', async (req, res) => {
    await Movie.find().then((response) => res.send(response))
})

router.get('/movies/:title', async (req, res) => {
    const title = `${req.params.title}`
    console.log(title)
    await Movie.findOne({'title': `${req.params.title}`})
    .then((response) => res.send(response))
})

router.get('/movies/year/:year', async (req, res) => {
    const year = parseInt(`${req.params.year}`)
    console.log(year)
    await Movie.find({
        'year': year
    }).then((response) => res.send(response))
})

router.get('/movies/genre/:genre', async (req, res) => {
    await Movie.find({
        'genres': `${req.params.genre}`
    }).then((response) => res.send(response))
})

router.get('/movies/director/:dicector', async (req, res) => {
    await Movie.find({
        'director': `${req.params.director}`
    }).then((response) => res.send(response))
})

module.exports = router;