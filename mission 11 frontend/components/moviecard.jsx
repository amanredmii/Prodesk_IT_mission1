import { Link } from "react-router-dom";

function MovieCard({ movie }) {

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
            ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
          </p>

        </div>

      </div>

    </Link>

  );
}

export default MovieCard;