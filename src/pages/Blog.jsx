import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const Blog = () => {
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
      <p>Blog</p>
    </div>
  );
};

export default Blog;
