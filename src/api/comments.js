const express = require('express');
const router = express.Router();
const Comment = require('../models/comments')

router.get('/comments', (req, res) => {
    Comment.find().then((response) => {
        res.send(response)
    })
})

router.post('/', (req, res) => {
    const newComment = Comment.create({
        "name": `${req.body.name}`,
        "email": `${req.body.email}`,
    });
    res.send('Created new comment')
    console.log(newComment);
})

module.exports = router;