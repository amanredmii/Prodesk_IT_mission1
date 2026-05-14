import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getMovieDetails } from "../services/api";



function MovieDetails() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        async function fetchMovie() {

            try {

                const response = await getMovieDetails(id);

                setMovie(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        }

        fetchMovie();

    }, [id]);

    if (loading) {

        return (

            <div
                className="
                    min-h-screen
                    bg-black
                    flex
                    items-center
                    justify-center
                    text-white
                    text-3xl
                    font-bold
                "
            >
                Loading...
            </div>

        );
    }



    return (

        <div className="bg-black min-h-screen text-white">

            <div className="relative h-[450px]">

                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/70
                        to-transparent
                    "
                />

            </div>

            <div
                className="
                    relative
                    z-10
                    px-6
                    md:px-16
                    -mt-48
                    pb-12
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        gap-10
                    "
                >

                    <div
                        className="
                            w-[260px]
                            mx-auto
                            md:mx-0
                            rounded-2xl
                            overflow-hidden
                            shadow-2xl
                            border
                            border-gray-800
                            flex-shrink-0
                        "
                    >

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full"
                        />

                    </div>

                    <div className="flex-1">

                        <h1
                            className="
                                text-4xl
                                md:text-6xl
                                font-extrabold
                            "
                        >
                            {movie.title}
                        </h1>

                        {movie.tagline && (

                            <p
                                className="
                                    text-red-500
                                    italic
                                    mt-3
                                    text-lg
                                "
                            >
                                "{movie.tagline}"
                            </p>

                        )}

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-4
                                mt-6
                            "
                        >

                            <span
                                className="
                                    bg-red-600
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-semibold
                                "
                            >
                                ⭐ {movie.vote_average.toFixed(1)}
                            </span>



                            <span
                                className="
                                    bg-gray-900
                                    border
                                    border-gray-700
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                "
                            >
                                📅 {movie.release_date}
                            </span>



                            <span
                                className="
                                    bg-gray-900
                                    border
                                    border-gray-700
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                "
                            >
                                ⏱ {movie.runtime} min
                            </span>

                        </div>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-3
                                mt-6
                            "
                        >

                            {movie.genres.map((genre) => (

                                <span
                                    key={genre.id}
                                    className="
                                        bg-gray-800
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        hover:bg-red-600
                                        transition
                                    "
                                >
                                    {genre.name}
                                </span>

                            ))}

                        </div>


                        <div className="mt-8">

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                "
                            >
                                Overview
                            </h2>

                            <p
                                className="
                                    text-gray-300
                                    leading-8
                                    text-base
                                    md:text-lg
                                    max-w-4xl
                                "
                            >
                                {movie.overview}
                            </p>

                        </div>

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-6
                                mt-10
                            "
                        >

                            <div
                                className="
                                    bg-gray-900
                                    p-5
                                    rounded-2xl
                                    border
                                    border-gray-800
                                "
                            >

                                <h3 className="text-gray-400 mb-2">
                                    Language
                                </h3>

                                <p className="text-xl font-semibold">
                                    {movie.original_language.toUpperCase()}
                                </p>

                            </div>



                            <div
                                className="
                                    bg-gray-900
                                    p-5
                                    rounded-2xl
                                    border
                                    border-gray-800
                                "
                            >

                                <h3 className="text-gray-400 mb-2">
                                    Popularity
                                </h3>

                                <p className="text-xl font-semibold">
                                    {Math.round(movie.popularity)}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MovieDetails;