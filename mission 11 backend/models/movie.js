const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    movieName: {
        type: String,
        required: true
    },

    watchDate: {
        type: Date,
        required: true
    }

});

module.exports =
    mongoose.model(
        "Movie",
        movieSchema
    );