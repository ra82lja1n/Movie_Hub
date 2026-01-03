import React, { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard({ movie }) {
  return (
    <div className=" bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden relative">
      <button className=" absolute top-2 right-2 text-4xl">❤️</button>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className=" w-full h-150 object-cover"
      />
      <div className=" p-4">
        <h3 className=" font-semibold mt-2 text-xl text-center">
          {movie.title}
        </h3>

        <div className=" flex justify-between items-center mt-2">
            <span className=" bg-gray-400 px-2 py-1 rounded-2xl font-bold text-sm font-bold">⭐ {movie.vote_average}</span>
            <Link className=" text-blue-600 font-medium">View Details➡️</Link>
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
