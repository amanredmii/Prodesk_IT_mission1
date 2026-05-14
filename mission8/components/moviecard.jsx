import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieCard({ movie }) {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {

    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];



    const exists = favorites.find(
      (item) => item.id === movie.id
    );



    if (exists) {
      setIsFavorite(true);
    }

  }, [movie.id]);


  const handleFavorite = (e) => {

    e.preventDefault();



    let favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    const alreadyExists = favorites.find(
      (item) => item.id === movie.id
    );



    if (alreadyExists) {
      favorites = favorites.filter(
        (item) => item.id !== movie.id
      );

      setIsFavorite(false);

    } else {


      favorites.push(movie);

      setIsFavorite(true);
    }



    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  };



  return (

    <Link to={`/movie/${movie.id}`}>

      <div
        className="
                    relative
                    bg-gray-900
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                    hover:scale-105
                    transition
                    duration-300
                "
      >

        <button
          onClick={handleFavorite}
          className="
                        absolute
                        top-3
                        right-3
                        z-20
                        text-2xl
                    "
        >

          {isFavorite ? "❤️" : "🤍"}

        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="
                        w-full
                        h-[320px]
                        object-cover
                    "
        />

        <div className="p-4">

          <h2
            className="
                            text-white
                            font-semibold
                            text-lg
                            line-clamp-1
                        "
          >
            {movie.title}
          </h2>



          <p
            className="
                            text-gray-400
                            text-sm
                            mt-2
                        "
          >
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

        </div>

      </div>

    </Link>
  );
}

export default MovieCard;