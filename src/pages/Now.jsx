import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const Now = () => {
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
      <p>Now</p>
    </div>
  );
};

export default Now;
