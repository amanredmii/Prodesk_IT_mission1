import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "./moviecard";
import SearchBar from "./searchbar";
import MovieForm from "./MovieForm";

function Home() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [savedMovies, setSavedMovies] = useState([]);


    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    useEffect(() => {

        fetchSavedMovies();

    }, []);

    async function fetchSavedMovies() {

        try {

            const response =
                await axios.get(
                    "http://localhost:5000/api/movies/saved"
                );

            setSavedMovies(
                response.data
            );

        }
        catch (error) {

            console.log(error);

        }

    }
    async function fetchMovies(pageNumber) {
        try {
            setLoading(true);

            const response =
                await getPopularMovies(pageNumber);

            setMovies((prev) => [
                ...prev,
                ...response,
            ]);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        function handleScroll() {
            const bottom =
                window.innerHeight +
                window.scrollY >=
                document.documentElement.scrollHeight - 200;

            if (bottom && !loading) {
                setPage((prev) => prev + 1);
            }
        }

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, [loading]);

    return (
        <div className="min-h-screen bg-[#0f172a] text-white">

            <div
                className="
            px-6
            md:px-12
            pt-10
            pb-6
            flex
            flex-col
            md:flex-row
            justify-between
            gap-6"
            >

                <div>

                    <h1
                        className="
                    text-4xl
                    font-bold"
                    >
                        Movie Explorer
                    </h1>

                    <p
                        className="
                    text-gray-400
                    mt-3"
                    >
                        Discover trending and popular movies
                    </p>

                </div>


                <div
                    className="
                w-full
                md:w-[350px]"
                >
                    <SearchBar />
                </div>
                <button
                    className="
                    mt-4
                    px-4
                    py-2
                    bg-blue-600
                    rounded"
                    onClick={() =>
                        navigate("/add")
                    }
                >
                    Add Movie
                </button>
            </div>
            <div
                className="
            px-6
            pb-10"
            >

                <h2
                    className="
                text-2xl
                font-bold
                mb-4"
                >
                    Saved Movies
                </h2>

                {
                    savedMovies.length === 0 ? (

                        <p>
                            No saved movies
                        </p>

                    ) : (

                        savedMovies.map((movie) => (

                            <div
                                key={movie._id}
                                className="
                            bg-slate-800
                            rounded
                            p-4
                            mb-3"
                            >

                                <h3>
                                    {movie.movieName}
                                </h3>

                                <p
                                    className="
                                text-gray-400"
                                >
                                    {
                                        new Date(
                                            movie.watchDate
                                        ).toDateString()
                                    }
                                </p>

                            </div>

                        ))

                    )
                }

            </div>



            <div
                className="
            px-6
            md:px-12
            pb-10
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6"
            >

                {
                    movies.map((movie) => (

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />

                    ))
                }

            </div>





        </div>
    );
}

export default Home;