import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchMovies } from "../services/api";

function SearchBar() {

    const [query, setQuery] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();



    async function movieHandler() {
        if (!query.trim())
            return;

        try {
            setLoading(true);
            const movies =
                await searchMovies(
                    query
                );

            console.log(
                movies
            );

            if (
                movies &&
                movies.length > 0
            ) {

                navigate(
                    `/movie/${movies[0].id}`
                );

            }

            else {

                alert(
                    "Movie not found"
                );

            }

            setQuery("");

        }

        catch (error) {

            console.log(
                error
            );

        }

        finally {

            setLoading(false);

        }

    }



    return (

        <div
            className="w-full"
        >

            <input
                type="text"
                placeholder=
                "Search movies..."

                value={query}

                onChange={
                    (e) =>
                        setQuery(
                            e.target.value
                        )
                }
                onKeyDown={
                    (e) => {
                        if (
                            e.key === "Enter"
                        ) {
                            movieHandler();

                        }

                    }
                }

                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white outline-nonefocus:border-red-500" />

            {
                loading && (

                    <p className="text-gray-400 mt-3">
                        Loading...

                    </p>

                )
            }

        </div>

    );

}

export default SearchBar;