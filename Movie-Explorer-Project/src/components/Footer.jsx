import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-16 ">
      <div className="max-w-7xl mx-auto px-6 py-12 pb-0.5">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              🎬 𝕄oviꫀ ℍub
            </h3>
            <p className="text-sm leading-relaxed">
              𝕄oviꫀ ℍub lets you discover trending and popular movies.
              Search, filter by rating, and Hubre your favourite films easily.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-white transition">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/fav" className="hover:text-white transition">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Built With
            </h3>
            <ul className="text-sm space-y-2">
              <li>⚛️ React</li>
              <li>🎨 Tailwind CSS</li>
              <li>🎥 TMDB API</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-sm">
          © {new Date().getFullYear()} Movie Hub. All rights reserved.
        </p>

        <p>Powered By Rahul Jain</p>
      </div>
    </footer>
  );
}

export default Footer;
