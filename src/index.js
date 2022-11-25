const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Comment = require('./models/comments')
const dotenv = require('dotenv').config({path: './config.env'})

mongoose.connect(process.env.DATABASE_LOGIN, () => {
    console.log("Connected to database.");
});

app.get('/', (req, res) => {
  const comment = new Comment({
    name: "Name",
    email: "Email@email.com"
  })
  comment.save()
  .then((response) => {
    res.send(response)
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})