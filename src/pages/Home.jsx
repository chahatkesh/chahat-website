import React from "react";
import Hero from "../components/HomeComponents/Hero";
import WorkGallery from "../components/HomeComponents/WorkGallery";
import Services from "../components/HomeComponents/Services";
import Process from "../components/HomeComponents/Process";
import Testimonial from "../components/HomeComponents/Testimonial";
import Contact from "../components/HomeComponents/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <WorkGallery />
      <Services />
      <Process />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
