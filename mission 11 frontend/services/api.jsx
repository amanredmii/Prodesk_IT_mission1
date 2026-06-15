import axios from "axios";

const API =
    "http://localhost:5000/api/movies";



export async function
    getPopularMovies(
        page = 1
    ) {

    const response =
        await axios.get(
            `${API}?page=${page}`
        );

    return response.data;

}



export async function
    getMovieDetails(
        id
    ) {

    const response =
        await axios.get(
            `http://localhost:5000/api/movies/${id}`
        );

    return response.data;

}



export async function searchMovies(query) {

    const response =
        await axios.get(
            `${API}/search`,
            {
                params: {
                    query
                }
            }
        );

    return response.data;

}