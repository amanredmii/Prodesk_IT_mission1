import { useState } from "react";
import axios from "axios";

function MovieForm() {
    const [movieName, setMovieName] = useState("");
    const [watchDate, setWatchDate] = useState("");

    const submitMovie = async (e) => {
        e.preventDefault();

        if (!movieName || !watchDate) {
            alert("Fill all fields");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5000/api/movies/add",
                {
                    movieName,
                    watchDate,
                }
            );

            alert("Movie Saved");

            setMovieName("");
            setWatchDate("");

        } catch (error) {
            console.log(error);
            alert("Unable to save movie");
        }
    };

    return (
        <div
            className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-gray-100
      via-white
      to-gray-200
      px-4"
        >

            <div
                className="
        w-full
        max-w-md
        bg-white/80
        backdrop-blur-lg
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-gray-200"
            >

                <div className="text-center mb-8">

                    <div
                        className="
            w-16
            h-16
            mx-auto
            rounded-full
            bg-black
            text-white
            flex
            items-center
            justify-center
            text-2xl"
                    >
                        🎬
                    </div>

                    <h2
                        className="
            mt-4
            text-3xl
            font-bold
            text-gray-900"
                    >
                        Add New Movie
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Save movies you watched
                    </p>

                </div>

                <form
                    onSubmit={submitMovie}
                    className="space-y-6"
                >

                    <div>

                        <label
                            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2"
                        >
                            Movie Name
                        </label>

                        <input
                            type="text"
                            placeholder="Interstellar"
                            value={movieName}
                            onChange={(e) =>
                                setMovieName(e.target.value)
                            }
                            className="
              w-full
              px-5
              py-3
              rounded-2xl
              bg-gray-50
              border
              border-gray-300
              focus:border-black
              focus:ring-4
              focus:ring-gray-200
              transition
              outline-none"
                        />

                    </div>

                    <div>

                        <label
                            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2"
                        >
                            Watch Date
                        </label>

                        <input
                            type="date"
                            value={watchDate}
                            onChange={(e) =>
                                setWatchDate(e.target.value)
                            }
                            className="
              w-full
              px-5
              py-3
              rounded-2xl
              bg-gray-50
              border
              border-gray-300
              focus:border-black
              focus:ring-4
              focus:ring-gray-200
              transition
              outline-none"
                        />

                    </div>

                    <button
                        type="submit"
                        className="
            w-full
            py-3
            rounded-2xl
            bg-black
            text-white
            font-semibold
            hover:scale-[1.02]
            hover:bg-gray-900
            transition
            duration-300"
                    >
                        Save Movie →
                    </button>

                </form>

            </div>

        </div>
    );
}

export default MovieForm;