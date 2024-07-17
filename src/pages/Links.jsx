import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const Links = () => {
  // loader start
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  // loder ends

  return loading ? (
    <Loader2 />
  ) : (
    <div>
      <div></div>
    </div>
  );
};

export default Links;
