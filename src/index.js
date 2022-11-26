const { urlencoded } = require('express');
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: './config.env'})
const comments = require('./api/comments')
const movies = require('./api/movies')

mongoose.connect(process.env.DATABASE_LOGIN, {dbName: "sample_mflix"});
app.use(express.json())
app.use('/api', movies)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})