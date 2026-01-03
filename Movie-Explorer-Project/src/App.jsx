import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
