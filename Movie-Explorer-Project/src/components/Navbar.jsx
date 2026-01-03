import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto py-2  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition"
          >
            🎬 𝕄oviꫀ ℍub
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="relative font-semibold hover:text-green-300 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="relative font-semibold hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Movies
            </Link>

            <Link
              to="/fav"
              className="relative font-semibold hover:text-pink-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all hover:after:w-full"
            >
              Favourites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
