import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const Portfolio = () => {
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
      <div>
        <img className="dark:invert" src="/portfolio_logo.png" alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
