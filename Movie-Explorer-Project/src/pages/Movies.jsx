import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../services/apiService";
import MoviesCard from "../components/MoviesCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);


  const fetchMovies = async (p = 1) => {
    try {
      setLoading(false);
      const data = await getPopularMovies(p);
      setMovies(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRating = movie.vote_average >= minRating;

    return matchSearch && matchRating;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading Movies...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🎬 Popular Movies
      </h1>

      {/* Filters */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10 flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="🔍 Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-full sm:w-40 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        >
          <option value="0">All Ratings</option>
          <option value="5">⭐ 5+</option>
          <option value="6">⭐ 6+</option>
          <option value="7">⭐ 7+</option>
          <option value="8">⭐ 8+</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setMinRating(0);
          }}
          className="w-full sm:w-auto px-6 py-3 font-semibold rounded-xl border border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-black transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-2xl font-semibold text-gray-500">
            No Movie Found 🥲
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredMovies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {/* Pagination */}

      <div className=" flex justify-center items-center gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded ${
            page <= 1
              ? "bg-gray-300 cursor-not-allowed "
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}

          onClick={()=>setPage(page -1)}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
        className={`px-4 py-2 rounded ${
            page >= 500
              ? "bg-gray-300 cursor-not-allowed "
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}

          onClick={()=>setPage(page + 1)}

        >Next</button>
      </div>
    </div>
  );
}

export default Movies;
