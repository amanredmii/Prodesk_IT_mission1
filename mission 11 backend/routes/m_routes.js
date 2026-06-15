const express = require("express");
const axios = require("axios");
const Movie = require("../models/movie");

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const response =
            await axios.get(
                "https://api.themoviedb.org/3/movie/popular",
                {
                    params: {
                        api_key:
                            process.env.TMDB_API_KEY,

                        page:
                            req.query.page || 1
                    }
                }
            );

        res.json(
            response.data.results
        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message:
                "Movie Error"
        });

    }

});

router.get("/search", async (req, res) => {

    try {

        const response =
            await axios.get(
                "https://api.themoviedb.org/3/search/movie",
                {
                    params: {
                        api_key:
                            process.env.TMDB_API_KEY,

                        query:
                            req.query.query
                    }
                }
            );

        res.json(
            response.data.results
        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message:
                "Search Error"
        });

    }

});

router.post("/add", async (req, res) => {

    try {

        const movie =
            new Movie({

                movieName:
                    req.body.movieName,

                watchDate:
                    req.body.watchDate

            });

        await movie.save();

        res.status(200).json({

            message:
                "Movie Saved"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
                "Save Error"

        });

    }

});

router.get("/saved", async (req, res) => {

    try {

        const movies =
            await Movie.find();

        res.status(200).json(
            movies
        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
                "Fetch Error"

        });

    }

});

router.get("/:id", async (req, res) => {

    try {

        const response =
            await axios.get(
                `https://api.themoviedb.org/3/movie/${req.params.id}`,
                {
                    params: {
                        api_key:
                            process.env.TMDB_API_KEY
                    }
                }
            );

        res.json(
            response.data
        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message:
                "Detail Error"
        });

    }

});



module.exports = router;