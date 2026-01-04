import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";
import Moviedetails from "./pages/Moviedetails";
import Favourite from "./components/Favourite";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details/:id" element={<Moviedetails/>} />
        <Route path="/fav" element={<Favourite/>}/>
      </Routes>
      <ToastContainer/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
