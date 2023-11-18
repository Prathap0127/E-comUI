import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// used to load the page
const Spinner = ({ path = "login" }) => {
  let [count, setCount] = useState(2);
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname, //use to make the user in the same path ofter logout
      });

    return () => clearInterval(interval); // if the data found the loading get cleared and shows the data
  }, [count, navigate, location, path]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h2 className="text-center"> Redirecting In {count} second</h2>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
