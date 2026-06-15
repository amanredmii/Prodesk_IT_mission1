import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetail() {
    const { id } = useParams();

    const [movie,
        setMovie] =
        useState(null);

    useEffect(() => {
        loadMovie();
    }, [id]);

    async function loadMovie() {

        try {
            const data =
                await getMovieDetails(id);
            setMovie(data);

        }

        catch (error) {

            console.log(error);
        }

    }

    if (!movie) {

        return (
            <h1>
                Loading...
            </h1>
        );

    }

    return (

        <div className="min-h-screen bg-black text-white p-8">

            <img
                src={
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                className="w-80 rounded" />

            <h1 className="text-4xl mt-6">
                {movie.title}
            </h1>

            <p className="mt-4">

                {movie.overview}

            </p>

            <p className="mt-4">
                ⭐
                {movie.vote_average}
            </p>

        </div>

    );

}

export default MovieDetail;