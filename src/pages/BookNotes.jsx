import React, { useEffect, useState } from "react";
import Loader2 from "../components/Loader2";

const BookNotes = () => {
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
      <div>BookNotes</div>
    </div>
  );
};

export default BookNotes;
