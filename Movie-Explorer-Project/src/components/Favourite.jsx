
import React from "react";
import { getFav } from "./fav";
import MoviesCard from "./MoviesCard";

function Favourite() {
  const favs = getFav();

  if (favs.length === 0) {
    return (
      <h2 className=" text-center text-2xl mt-50 mb-40 font-semibold animate-bounce">
        No Favourite Movies ❤️
      </h2>
    );
  }
  return (
    <div className=" min-h-screen bg-gray-100 py-8">
      <h1 className=" text-3xl font-bold text-center mb-8 animate-pulse text-blue-400 text-shadow-lg text-shadow-blue-600">
        My Favourite Movies
      </h1>

      <div className=" max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            favs.map((movie)=>(
                <MoviesCard key={movie.id} movie={movie}/>
            ))
        }
      </div>
    </div>
  );
}

export default Favourite;
