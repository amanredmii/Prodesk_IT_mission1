import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "./moviecard";
import SearchBar from "./searchbar";
import Favorites from "./fabrouite";
import { Link } from "react-router-dom";

function Home() {

    console.log(
        import.meta.env.VITE_TMDB_API_KEY
    );

    const [movies, setMovies] = useState([]);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetchMovies(page);

    }, [page]);



    async function fetchMovies(pageNumber) {

        try {

            setLoading(true);

            const response =
                await getPopularMovies(pageNumber);
            setMovies((prev) => [
                ...prev,
                ...response.data.results,
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
    md:items-center
    md:justify-between
    gap-6
  "
            >
                <div>

                    <h1 className="
        text-4xl
        md:text-5xl
        font-bold
        tracking-tight
      "
                    >
                        Movie Explorer
                    </h1>

                    <p
                        className="
        text-gray-400
        mt-3
        text-sm
        md:text-base
        max-w-xl
      "
                    >
                        Discover trending and popular movies
                        from around the world
                    </p>

                </div>



                <div className="w-full md:w-[350px]">

                    <SearchBar />

                </div>
                <Link to="/favorites">

                    <button
                        className="
                bg-red-600
                hover:bg-red-700
                transition
                px-5
                py-3
                rounded-xl
                font-semibold
                text-white
                whitespace-nowrap
            "
                    >
                        ❤️ Favorites
                    </button>

                </Link>


            </div>

            <div className="
                px-6 md:px-12 pb-10
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                xl:grid-cols-6
                gap-6
            ">

                {movies.map(movie => (
                    <div
                        key={movie.id}
                        className="
                            transform
                            hover:scale-105
                            transition-all
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

export default Home;