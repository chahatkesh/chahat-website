import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BookNotes from "./pages/BookNotes";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Now from "./pages/Now";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  // loader start
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  // loder ends

  return loading ? (
    <Loader />
  ) : (
    <div className="dark:bg-[#18181b]">
      <div className="flex flex-col items-center min-h-[100vh] w-[90%] ml-auto mr-auto overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/booknotes" element={<BookNotes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/now" element={<Now />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
