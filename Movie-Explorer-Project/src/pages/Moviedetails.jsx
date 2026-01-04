import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../services/apiService";
import { useParams } from "react-router-dom";
import { addToFav, isFav, removeFromFav } from "../components/fav";
import { toast } from "react-toastify";

function Moviedetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        console.log(data);
        setMovie(data);
        setFav(isFav(data.id))
      })
      .catch((err) => console.log(err));
  }, []);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading Movies...
        </h2>
      </div>
    );
  }

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
    <div className=" mt-5 min-h-screen bg-gray-100 ">
      <div className=" max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className=" md:w-1/3 object-cover "
        />

        <div className=" p-6 md:2/3">
          <h1 className=" text-3xl font-bold mb-4">{movie.title}</h1>
          <h2>{movie.tagline}</h2>
          <p className=" text-gray-700 mb-4">{movie.overview}</p>
          <p className=" font-semibold mb-2">⭐ Rating: {movie.vote_average}</p>
          <p className=" mb-2 font-semibold ">
            📅 Release Date : {movie.release_date}
          </p>

          <button
            onClick={() => toggleFav()}
            className=" px-5 py-3 bg-red-600 rounded-lg cursor-pointer text-white hover:bg-red-700 font-semibold"
          >
            {fav ? "Remove from favourites" : "Add to favourite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moviedetails;
