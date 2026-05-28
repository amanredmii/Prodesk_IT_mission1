const mongoose = require("mongoose");
const post_structure = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Post",
    post_structure
);