import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookNotes from "./pages/BookNotes";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booknotes" element={<BookNotes />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
