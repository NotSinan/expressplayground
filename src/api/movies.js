const express = require('express');
const router = express.Router()
const Movie = require('../models/movies')

router.get('/movies', async (req, res) => {
    await Movie.find().then((response) => res.send(response))
})

router.get('/movies/:title', async (req, res) => {
    const title = `${req.params.title}`
    console.log(title)
    Movie.findOne({'title': `${req.params.title}`})
    .then((response) => res.send(response))
})

module.exports = router;