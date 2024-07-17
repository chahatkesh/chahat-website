import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const About = () => {
  // loader start
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  // loder ends

  return loading ? (
    <Loader2 />
  ) : (
    <div>
      <p>About</p>
    </div>
  );
};

export default About;
