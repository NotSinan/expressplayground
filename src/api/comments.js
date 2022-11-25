const express = require('express');
const router = express.Router();
const Comment = require('../models/comments')

router.get('/comments', (req, res) => {
    Comment.find().then((response) => {
        res.send(response)
    })
})