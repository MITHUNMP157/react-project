import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");

    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "40vh" }}
    >
      <div className="card shadow p-4 text-center" style={{ width: "350px" }}>
        <h3 className="text-danger">Logging Out...</h3>
        <p>You will be redirected to login page shortly.</p>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger mt-3 " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
