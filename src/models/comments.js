const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    movie_id: {
        type: mongoose.SchemaTypes.ObjectId
    },
    text: {
        type: String
    },
    date: {
        type: Date
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;