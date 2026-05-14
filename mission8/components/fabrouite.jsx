import { useEffect, useState } from "react";

import MovieCard from "./moviecard";

function Favorites() {

    const [favorites, setFavorites] = useState([]);




    useEffect(() => {

        const savedMovies =
            JSON.parse(
                localStorage.getItem("favorites")
            ) || [];



        setFavorites(savedMovies);

    }, []);




    return (

        <div
            className="
                min-h-screen
                bg-[#0f172a]
                text-white
                px-6
                md:px-12
                py-10
            "
        >

            {/* Heading */}
            <div className="mb-10">

                <h1
                    className="
                        text-4xl
                        md:text-5xl
                        font-bold
                    "
                >
                    Favorite Movies
                </h1>



                <p
                    className="
                        text-gray-400
                        mt-3
                    "
                >
                    Your saved favorite movie collection
                </p>

            </div>



            {/* Empty State */}
            {favorites.length === 0 && (

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        mt-20
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-semibold
                        "
                    >
                        No Favorite Movies Yet ❤️
                    </h2>



                    <p
                        className="
                            text-gray-400
                            mt-3
                        "
                    >
                        Add movies to your favorites list
                    </p>

                </div>

            )}



            {/* Movies Grid */}
            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                    gap-6
                "
            >

                {favorites.map((movie) => (

                    <div
                        key={movie.id}
                        className="
                            hover:scale-105
                            transition
                            duration-300
                        "
                    >

                        <MovieCard movie={movie} />

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Favorites;