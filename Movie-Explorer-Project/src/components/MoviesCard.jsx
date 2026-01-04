import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToFav, isFav, removeFromFav } from "./fav";
import { toast } from "react-toastify";


function MoviesCard({ movie }) {
  const [fav, setFav] = useState(isFav(movie.id));

  const toggleFav = () => {
    if (fav) {
      removeFromFav(movie.id);
      toast.info(`${movie.title} removed From Favourite`);
    } else {
      addToFav(movie);
      toast.success(`${movie.title} added To Favrouite`);
    }
    setFav(!fav);
  };

  return (
    <div className=" bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden relative">
      <button
        onClick={toggleFav}
        className=" absolute top-2 right-2 text-4xl text-white"
      >
        {fav ? "❤️" : "🤍"}
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        className=" w-full h-95 object-cover"
      />
      <div className=" p-4">
        <h3 className=" font-semibold mt-2 text-xl text-center">
          {movie.title}
        </h3>

        <div className=" flex justify-between items-center mt-2">
          <span className=" bg-gray-400 px-2 py-1 rounded-2xl font-bold text-sm">
            ⭐ {movie.vote_average}
          </span>
          <Link
            className=" text-blue-600 font-medium"
            to={`/movie-details/${movie.id}`}
          >
            View Details➡️
          </Link>
          {/* "/movie-details:id" :id is for params */}
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
