import React, { useState, useEffect } from 'react';
import { Star, PlayCircle } from 'lucide-react';

const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be37162b59b89e456699121ecffc';
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-400">
                <p className="text-xl">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
            {/* Navigation */}
            <nav className="p-6 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-black tracking-tighter text-indigo-500 italic">
                        FLIX<span className="text-white">GRID</span>
                    </h1>
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
                        <a href="#" className="hover:text-indigo-400 transition">Movies</a>
                        <a href="#" className="hover:text-indigo-400 transition">TV Shows</a>
                        <a href="#" className="hover:text-indigo-400 transition">My List</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <header className="mb-12">
                    <h2 className="text-4xl font-bold mb-2">Trending Movies</h2>
                    <p className="text-gray-400">Most watched movies this week</p>
                </header>

                {loading ? (
                    /* Skeleton Loading State */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="bg-gray-900 rounded-xl h-80 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    /* Movie Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/20 border border-gray-800"
                            >
                                {/* Poster Image */}
                                <div className="relative aspect-[2/3] overflow-hidden">
                                    <img
                                        src={movie.poster_path ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Image'}
                                        alt={movie.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-indigo-600 p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <PlayCircle size={32} fill="white" />
                                        </button>
                                    </div>
                                    {/* Rating Badge */}
                                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                        {movie.vote_average.toFixed(1)}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-4">
                                    <h3 className="font-bold text-md leading-tight mb-1 truncate group-hover:text-indigo-400 transition-colors">
                                        {movie.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>{movie.release_date?.split('-')[0]}</span>
                                        <span className="border border-gray-700 px-2 py-0.5 rounded uppercase">Movie</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MovieApp;