import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { searchMovies } from "../services/api";



function SearchBar() {

    const [query, setQuery] = useState("");

    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();



    useEffect(() => {

        const timer = setTimeout(() => {

            if (!query.trim()) {

                setMovies([]);

                return;
            }

            fetchMovies();

        }, 500);



        return () => clearTimeout(timer);

    }, [query]);



    async function fetchMovies() {

        try {

            setLoading(true);

            const response = await searchMovies(query);

            setMovies(response.data.results);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    }



    function handleMovieClick(id) {

        navigate(`/movie/${id}`);


        setQuery("");

        setMovies([]);
    }



    return (

        <div className="relative w-full">

            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-900
                    border
                    border-gray-700
                    text-white
                    outline-none
                    focus:border-red-500
                "
            />

            {loading && (

                <p className="text-gray-400 mt-3">
                    Loading...
                </p>

            )}


            {movies.length > 0 && (

                <div
                    className="
                        absolute
                        top-16
                        left-0
                        w-full
                        bg-gray-900
                        rounded-2xl
                        overflow-hidden
                        shadow-2xl
                        border
                        border-gray-800
                        z-50
                    "
                >

                    {movies.map((movie) => (

                        <div
                            key={movie.id}

                            onClick={() =>
                                handleMovieClick(movie.id)
                            }

                            className="
                                flex
                                items-center
                                gap-4
                                p-3
                                hover:bg-gray-800
                                cursor-pointer
                                transition
                                border-b
                                border-gray-800
                            "
                        >


                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className="
                                    w-14
                                    rounded-lg
                                "
                            />




                            <div>

                                <h2
                                    className="
                                        text-white
                                        font-medium
                                    "
                                >
                                    {movie.title}
                                </h2>

                                <p
                                    className="
                                        text-gray-400
                                        text-sm
                                    "
                                >
                                    {movie.release_date}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default SearchBar;