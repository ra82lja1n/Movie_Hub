import  Axios  from "axios";
import App from "../App";

let API_KEY = "07c1bcc726cc8737a9ccbcea18dd3040";
let BASE_URL = "https://api.themoviedb.org/3";

// Popular Movies
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error in Fetching Popular Movies", error);
  }
};

//Single Movie
export const getMovieDetails = async (id) => {
  try {
    const response = await Axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log("Error in Fetching Movie Details", error);
  }
};

//Trending Movies
export const getTrendingMovies = async () => {
  try {
    const response = await Axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error in Fetching Trending Movies", error);
  }
};


