const axios = require("axios");

async function getPopularMovies() {

    const response =
        await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
                params: {
                    api_key: process.env.TMDB_API_KEY
                }
            }
        );

    return response.data.results;

}

module.exports = {
    getPopularMovies
};