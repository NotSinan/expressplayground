const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Comment = require('./models/comments')
const dotenv = require('dotenv').config({path: './config.env'})

mongoose.connect(process.env.DATABASE_LOGIN, {dbName: "sample_mflix"});

app.get('/comments', (req, res) => {
  Comment.find().then((response) => {
      res.send(response)
  })
})

app.get('/', async (req, res) => {
  const a = await Comment.create({"name": "Steve", "email": "stevehenkerton@gmail.com"})
  console.log(a)
  res.send(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})