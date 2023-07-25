import React, { useEffect } from "react";
import { fetchGreetings } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    // Fetch greetings initially
    dispatch(fetchGreetings());

    // Fetch greetings every 5 seconds
    const interval = setInterval(() => {
      dispatch(fetchGreetings());
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="centre">
      {greetingsData && <h1>{greetingsData.message}</h1>}
    </div>
  );
}

export default Greetings;
