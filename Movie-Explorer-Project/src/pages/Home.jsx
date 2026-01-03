import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/apiService";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.slice(0, 4));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading Movies...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold tracking-wide">
          🎬 𝕄oviꫀ ℍub
        </h1>
        <p className="mt-3 text-gray-300 text-lg">
          Discover trending and popular movies instantly
        </p>

        <Link
          to="/movies"
          className="inline-block mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          Explore Movies →
        </Link>
      </div>

      {/* Trending Section */}
      <h2 className="text-3xl font-bold mt-12 mb-8 text-center text-gray-800">
        🔥 Trending Movies
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-center truncate">
                {movie.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
