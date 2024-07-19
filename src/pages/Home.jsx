import React, { useEffect, useState } from "react";
import Hero from "../components/HomeComponents/Hero";
import WorkGallery from "../components/HomeComponents/WorkGallery";
import Services from "../components/HomeComponents/Services";
import Process from "../components/HomeComponents/Process";
import Testimonial from "../components/HomeComponents/Testimonial";
import Contact from "../components/HomeComponents/Contact";
import Loader2 from "../components/Loader2";
import Message from "../components/HomeComponents/Message";

const Home = () => {
  // loader start
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  // loder ends

  return loading ? (
    <Loader2 />
  ) : (
    <>
      <Hero />
      <WorkGallery />
      <Services />
      <Process />
      <Testimonial />
      <Message />
      <Contact />
    </>
  );
};

export default Home;
